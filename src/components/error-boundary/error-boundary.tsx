import React, { Component } from "react";

import { ErrorIndicator } from "../error-indicator";

interface ErrorBoundaryProps {
    children: React.ReactNode,
}

type ErrorBoundaryState = {
    hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state = {
        hasError: false
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({
            hasError: true
        });
    }

    render() {
         return this.state.hasError ? <ErrorIndicator /> : this.props.children;
    }
}