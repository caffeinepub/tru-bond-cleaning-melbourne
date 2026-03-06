import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Simplified {
    id: Id;
    serviceType: ServiceType;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export type Id = bigint;
export enum ServiceType {
    windowCleaning = "windowCleaning",
    other = "other",
    endOfLease = "endOfLease",
    pestControl = "pestControl",
    carpetCleaning = "carpetCleaning"
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<Simplified>>;
    getSubmissionById(id: Id): Promise<Simplified>;
    submitContact(name: string, email: string, phone: string, serviceType: ServiceType, message: string): Promise<Id>;
}
