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
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    if (error.message.includes("User not found")) {
      return {
        success: false,
        message: "لم يتم العثور على حساب مرتبط بهذا البريد الإلكتروني.",
      };
    }
    return {
      success: false,
      message:
        "حدث خطأ أثناء إعادة تعيين كلمة المرور. الرجاء المحاولة مرة أخرى.",
    };
  }
  return { success: true, data };
}

export async function updatePassword(newPassword) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });
  if (error) {
    return {
      success: false,
      message: "حدث خطأ أثناء تحديث كلمة المرور. الرجاء المحاولة مرة أخرى.",
    };
  }
  return { success: true, data };
}

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
