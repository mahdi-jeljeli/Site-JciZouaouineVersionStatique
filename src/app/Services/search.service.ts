// search.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private allContent: any[] = [
    // { title: 'Our Project', routerLink: () => this.scrollToOurProject() },
    { title: 'Join Us', link: "/joinus", routerLinkActive: "'active'" },
    { title: 'About Us', link: '/about' , routerLinkActive: "'active'" },
    { title: 'Nos action', link: '/NOSACTIONS' , routerLinkActive: "'active'" },
    { title: 'project', link: '/NOSACTIONS' , routerLinkActive: "'active'" },
  ];
  
  
  searchResults: any[] = [];

  constructor() { }

  search(query: string): void {
    // Réinitialise les résultats de recherche à chaque nouvelle recherche
    this.searchResults = [];

    // Convertit la requête en minuscules pour une recherche insensible à la casse
    const lowercaseQuery = query.toLowerCase();

    // Filtre les éléments dont le titre contient la requête
    this.searchResults = this.allContent.filter(item => item.title.toLowerCase().includes(lowercaseQuery));
       // Vérifie si la recherche n'a donné aucun résultat
       if (this.searchResults.length === 0) {
        // Ajoute un élément spécial pour indiquer l'absence de résultats
        this.searchResults.push({ title: 'No result' });
      }
  }

  chooseResult(): void {
    // Réinitialisez la liste des résultats après avoir fait un choix
    this.searchResults = [];
  }

  getResults(): any[] {
    return this.searchResults;
  }
}
