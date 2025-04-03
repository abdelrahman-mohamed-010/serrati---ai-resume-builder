"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function signInWithOtp(email) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
    },
  });
  if (error) {
    return {
      success: false,
      message: "حدث خطأ أثناء إرسال رمز التحقق. الرجاء المحاولة مرة أخرى.",
    };
  }
  return { success: true, data };
}

export async function signUp(email, password) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    // Removed emailRedirectTo as it's not needed for the manual OTP flow
  });

  if (error) {
    if (error.message.includes("User already registered")) {
      return {
        success: false,
        message: "البريد الإلكتروني مسجل بالفعل، الرجاء تسجيل الدخول.",
      };
    }
    return {
      success: false,
      message: "حدث خطأ أثناء إنشاء الحساب. الرجاء المحاولة مرة أخرى.",
    };
  }

  return { success: true, data };
}

export async function signIn(email, password) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    // Return a structured error message in Arabic
    if (error.message.includes("Invalid login credentials")) {
      return {
        success: false,
        message: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
      };
    }
    return {
      success: false,
      message: "حدث خطأ أثناء تسجيل الدخول. الرجاء المحاولة مرة أخرى.",
    };
  }
  return { success: true, data };
}

export async function signOut() {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    return {
      success: false,
      message: "حدث خطأ أثناء تسجيل الخروج. الرجاء المحاولة مرة أخرى.",
    };
  }
  return { success: true, message: "تم تسجيل الخروج بنجاح." };
}

export async function resetPassword(email) {
  const supabase = await createServerSupabaseClient();

  // Make sure we properly build the resetPasswordURL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const resetPasswordURL = `${siteUrl}/reset-password`;

  console.log(
    `Sending reset password email to ${email} with redirect to ${resetPasswordURL}`
  );

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: resetPasswordURL,
  });

  if (error) {
    console.error("Reset password email error:", error);
    return {
      success: false,
      message:
        "حدث خطأ أثناء إعادة تعيين كلمة المرور. الرجاء المحاولة مرة أخرى.",
    };
  }
  return { success: true, data };
}

// Remove the updatePassword function since it's redundant
// Use updateUser({ password: newPassword }) instead

export async function verifyOTP(email, token, type = "email") {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
    error,
  } = await supabase.auth.verifyOtp({
    email,
    token,
    type,
  });
  if (error) {
    if (error.message.includes("Invalid or expired OTP")) {
      return {
        success: false,
        message: "رمز التحقق غير صحيح أو منتهي الصلاحية.",
      };
    }
    return {
      success: false,
      message: "حدث خطأ أثناء التحقق من الرمز. الرجاء المحاولة مرة أخرى.",
    };
  }
  return { success: true, session };
}

export async function getUser() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    return { success: false, user: null };
  }
  return { success: true, user };
}

export async function updateUser(attributes) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.updateUser(attributes);

  if (error) {
    console.error("Update user error:", error);
    return {
      success: false,
      message:
        "حدث خطأ أثناء تحديث بيانات المستخدم. الرجاء التأكد من تسجيل الدخول والمحاولة مرة أخرى.",
    };
  }
  return { success: true, data };
}

export async function resetUserPassword(newPassword, token) {
  try {
    if (!token) {
      console.error("No reset token provided");
      return {
        success: false,
        message: "رمز إعادة تعيين كلمة المرور مفقود.",
      };
    }

    console.log(`Processing password reset with token length: ${token.length}`);

    const supabase = await createServerSupabaseClient();

    // First, try to get the current session (may already be authenticated)
    const { data: sessionData } = await supabase.auth.getSession();
    console.log("Current session:", sessionData?.session ? "Active" : "None");

    // If we're not already in a session, try to use the recovery token
    if (!sessionData?.session) {
      try {
        const { error: exchangeError } =
          await supabase.auth.exchangeCodeForSession(token);

        if (exchangeError) {
          console.error("Code exchange error:", exchangeError);
          return {
            success: false,
            message: "رمز إعادة تعيين كلمة المرور غير صالح أو منتهي الصلاحية.",
          };
        }
      } catch (exchangeError) {
        console.error("Error during code exchange:", exchangeError);
      }
    }
    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (updateError) {
      console.error("Password update error:", updateError);
      return {
        success: false,
        message:
          "حدث خطأ أثناء تحديث كلمة المرور. تأكد من أنك مسجل الدخول من خلال رابط إعادة التعيين.",
      };
    }

    console.log("Password updated successfully!");
    return { success: true };
  } catch (error) {
    console.error("Unexpected error in resetUserPassword:", error);
    return {
      success: false,
      message: "حدث خطأ غير متوقع. الرجاء المحاولة مرة أخرى.",
    };
  }
}

export async function signInWithGithub() {
  const supabase = await createServerSupabaseClient();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${siteUrl}/auth/callback`,
    },
  });

  if (error) {
    return {
      success: false,
      message:
        "حدث خطأ أثناء تسجيل الدخول باستخدام GitHub. الرجاء المحاولة مرة أخرى.",
    };
  }
  return { success: true, url: data.url };
}

export async function signInWithGoogle() {
  const supabase = await createServerSupabaseClient();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${siteUrl}/auth/callback`,
    },
  });

  if (error) {
    return {
      success: false,
      message:
        "حدث خطأ أثناء تسجيل الدخول باستخدام Google. الرجاء المحاولة مرة أخرى.",
    };
  }
  return { success: true, url: data.url };
}
