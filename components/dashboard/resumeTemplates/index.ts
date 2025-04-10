import ClassicTemplate from './ClassicTemplate';
import ModernTemplate from './ModernTemplate';
import MinimalistTemplate from './MinimalistTemplate';
import ExecutiveTemplate from './ExecutiveTemplate';
import CreativeTemplate from './CreativeTemplate';

export {
  ClassicTemplate,
  ModernTemplate,
  MinimalistTemplate,
  ExecutiveTemplate,
  CreativeTemplate,
};

// Template metadata for selection UI
export const templateOptions = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'A traditional single-column resume layout',
    component: ClassicTemplate,
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary two-column design with sidebar',
    component: ModernTemplate,
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean design with subtle typography and spacing',
    component: MinimalistTemplate,
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Professional template for senior positions',
    component: ExecutiveTemplate,
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Bold design for creative professionals',
    component: CreativeTemplate,
  }
];

export default templateOptions;
