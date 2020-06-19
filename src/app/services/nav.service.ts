import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { NavItem } from "../models";

@Injectable({
  providedIn: "root",
})
export class NavService {
  private navSource = new BehaviorSubject<NavItem>(null);
  currentNav = this.navSource.asObservable();
  constructor(private http: HttpClient) {}

  public getNav(): Observable<NavItem[]> {
    const requestUrl = `../rest/ui/nav`;
    return this.http.get<NavItem[]>(requestUrl);
  }

  public navigate(item: NavItem) {
    this.navSource.next(item);
  }
}

const items: NavItem[] = [
  {
    id: "123.4",
    label: "Configuracion",
    children: [
      {
        id: "123.10",
        label: "Search",
      },
      {
        id: "123.10",
        label: "Common",
        children: [
          {
            id: "123.10",
            label: "DB Properties",
          },
          {
            id: "123.10",
            label: "Bundles",
          },
          {
            id: "123.10",
            label: "System Configurations",
          },
          {
            id: "123.10",
            label: "Versions",
          },
        ],
      },
      {
        id: "123.10",
        label: "User",
      },
    ],
  },
  {
    id: "123.5",
    label: "Contactos",
    children: [
      {
        id: "123.5",
        label: "Buscar Contactos",
      },
      {
        id: "123.5",
        label: "Contactos por Nombre",
      },
    ],
  },
  {
    id: "123.6",
    label: "Compras",
    children: [
      {
        id: "123.5",
        label: "Gestion de Compras",
        children: [
          {
            id: "123.5",
            label: "Solicitud de COticasion",
          },
        ],
      },
      {
        id: "123.5",
        label: "Contactos por Nombre",
      },
    ],
  },
  {
    id: "123.7",
    label: "Ventas",
  },
  {
    id: "123.7",
    label: "Multilevel1",
    children: [
      {
        id: "123.7",
        label: "Multilevel2",
        children: [
          {
            id: "123.7",
            label: "Multilevel3",
          },
          {
            id: "123.7",
            label: "Multilevel3",
            children: [
              {
                id: "123.7",
                label: "Multilevel4",
                children: [
                  {
                    id: "123.7",
                    label: "Multilevel5",
                    children: [
                      {
                        id: "123.7",
                        label: "Multilevel6",
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
