import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

interface Icon {
    name: string;
    path: string;
}

type Icons = Icon[]


@Injectable({
    providedIn: 'root'
})
export class IconsService {
    private list: Icons = [
        {
            name: "excel",
            path: "/assets/images/excel.svg"
        }
    ]

    constructor(private readonly matIconRegistry: MatIconRegistry, private readonly domSanitizer: DomSanitizer) {
        for (const icon of this.list) {
            this.matIconRegistry.addSvgIcon(
                icon.name,
                this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
            )
        }
    }

}