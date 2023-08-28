import React, { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";

export type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export type ButtonProps = {
  variant?: "primary" | "secondary" | "danger" | "none";
  label: string;
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className: string | "";
  children: ReactNode;
};

export type FlexboxContainerProps = {
  className: string | undefined;
  children: ReactNode;
};

export type Task = {
  filter(arg0: (task: Task) => boolean): unknown;
  id: string;
  title: string;
  description: string;
  status: string;
  user_id: string;
  doc_id: string;
};
export type formDataObject = {
  title: string;
  description: string;
  status: string;
  user_id: string;
  id: string;
  doc_id: string;
};
export type FormProps = {
  HeadingLabel: string;
  SubHeadingLabel: string;
  ButtonLabel: string;
  label: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

export type HeadingProps = {
  text: string;
  className: string | undefined;
};

export type InputProps = {
  type?: string;
  placeholder?: string;
  className: string;
  value: string | undefined;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export type LabelProps = {
  htmlFor: string;
  text: string;
  className: string;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  HeadingLabel: string;
  SubHeadingLabel: string;
  ButtonLabel: string;
  label: string;
  formData?: formDataObject | "";
};

export type ParagraphProps = {
  text: string | null | undefined;
  className: string;
  onClick?: () => {};
};

export type SelectProps = {
  options: { value: string; label: string }[];
  className: string;
  value: string | undefined;
  name: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export type TabProps = {
  tabs: string[];
  children: ReactNode[];
};

export type TaskCardProps = {
  id: string;
  title: string;
  description: string;
  status: string;
  onEdit: () => void;
  onDelete: () => void;
};

export type TaskListProps = {
  filter: string | "";
};

export type TextAreaProps = {
  placeholder?: string;
  rows?: number;
  cols?: number;
  className: string;
  value: string | undefined;
  name: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

export type UpdateDataProps = {
  collection: string;
  docId: string;
};

export type FormData = {
  title: string;
  description: string;
  status: string;
};

export type Errors = {
  title?: string;
  description?: string;
  status?: string;
};

export type ErrorProps = {
  errorText: string;
};
