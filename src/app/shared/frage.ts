export interface Frage {
    fragenId: any;
    fragetyp: string; // single, multi, fill
    frage: string;
    antwort: string[];
    antwortenId: number[];
    korrekteAntwort: any[];
}
