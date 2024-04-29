/// <reference types="vite/client" />

enum Colors {
    Purple = "secondary",
    Blue = "primary",
    Green = "success",
}

type DBEvent = {
    Date: number;
    Name: string;
    Description?: string;
    Color: Colors;
}