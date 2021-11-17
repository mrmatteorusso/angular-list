import { Component, OnInit } from '@angular/core';
import { Country } from '../../Country';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  country: Country = {
    name: '',
    language: '',
    population: null,
    area: null,
    economy: {
        agriculture: null,
        energy: null,
        turism: null
    },
  
  }
  countries: Country[];
  showDetails: boolean = true;
  faCoffee = faCoffee;
  faPlus = faPlus
  faMinus = faMinus
  showCountry: boolean = false;

  constructor() { }

  ngOnInit() {
    this.countries = [
      {
        name: 'Italy',
        language: 'Italian',
        population: 59.0000,
        area: 300.000,
        economy: {
            agriculture: 20,
            energy: 30,
            turism: 50
      },
      hideMain: true,
      hideSub: false,
      show: true

    },
    {
      name: 'Germany',
      language: 'German',
      population: 83.0000,
      area: 357.000,
      economy: {
          agriculture: 30,
          energy: 50,
          turism: 20
        },
        hideMain: true,
        hideSub: false,
        show: true
    },
    {
      name: 'United Kindom',
      language: 'English',
      population: 67.000,
      area: 242.000,
      economy: {
          agriculture: 10,
          energy: 50,
          turism: 40
    },
    hideMain: true,
    hideSub: false,
    show: true

  },
    {
      name: 'France',
      language: 'French',
      population: 66.000,
      area: 640.000,
      economy: {
        agriculture: 10,
        energy: 50,
        turism: 40
    },
    hideMain: true,
    hideSub: false,
    show: false


  },
  ]

  }




OnSummit(e: { preventDefault: () => void; }) {
  console.log(123);
  e.preventDefault();
}

fireEvent(e) {
console.log(e.target.value)
}

addNewCountry() {
  this.countries.push(this.country)

  this.country = {
    name: '',
    language: '',
    population: null,
    area: null,
    economy: {
        agriculture: null,
        energy: null,
        turism: null
    },

  }
}

}
