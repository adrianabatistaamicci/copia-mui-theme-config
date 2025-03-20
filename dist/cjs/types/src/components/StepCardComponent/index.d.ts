import React from "react";
interface IStepCardComponent {
    icon: JSX.Element;
    title: string;
    progress?: string;
    showProgressBar?: boolean;
    onClick: () => void;
    date?: string | null;
    chipStatus?: React.ReactNode;
    selected?: boolean;
    disabled?: boolean;
    isProjectDisabled?: boolean;
    toggleShowStepCardDeadlinesDialog?: (() => void) | null;
}
declare const StepCardComponent: ({ icon, title, progress, onClick, date, chipStatus, selected, disabled, isProjectDisabled, showProgressBar, toggleShowStepCardDeadlinesDialog, }: IStepCardComponent) => import("react/jsx-runtime").JSX.Element;
export default StepCardComponent;
