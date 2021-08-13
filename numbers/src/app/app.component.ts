import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getCodes } from './getCode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  status: string
  dateField = new FormControl()
  matrixField = new FormControl()
  character = 0
  energy = 0
  curious = 0
  health = 0
  logic = 0
  work = 0
  luck = 0
  dolg = 0
  memory = 0
  temp = 0
  goal = 0
  byt = 0
  fam = 0
  habits = 0
  destinyNumb = 0

  get matrixString() {
    return `${this.returnString(this.character, '1')  || '-'}/${this.returnString(this.health, '4') || '-'}/${this.returnString(this.luck, '7') || '-'}/${this.returnString(this.energy, '2') || '-'}/${this.returnString(this.logic, '5') || '-'}/${this.returnString(this.dolg, '8') || '-'}/${this.returnString(this.curious, '3') || '-'}/${this.returnString(this.work, '6') || '-'}/${this.returnString(this.memory, '9') || '-'}/ЧС${this.destinyNumb}`
  }
  get codes() {
    return getCodes(this.character, this.energy, this.curious, this.health, this.logic, this.work, this.luck, this.dolg, this.memory, this.temp, this.goal, this.fam, this.habits, this.byt, this.destinyNumb)
  }

  getDate() {
    const date = this.dateField.value.replaceAll('.', '')
    let additionNumber1 = 0
    let additionNumber2 = 0
    let additionNumber3 = 0
    let additionNumber4 = 0
    for(let i = 0; i < date.length; i++) additionNumber1 += +date[i]
    for(let i = 0; i < String(additionNumber1).length; i++) additionNumber2 += +String(additionNumber1)[i]
    additionNumber3 = additionNumber1 - ( 2 *  (date[0] == 0 ? +date[1] : +date[0]))
    for(let i = 0; i < String(additionNumber3).length; i++) additionNumber4 += +String(additionNumber3)[i]

    const line = String(date) + additionNumber1 + additionNumber2 + additionNumber3 + additionNumber4

    this.calculateMatrix(line)

    if (additionNumber2 > 9 && additionNumber2 !== 11) {
      for(let i = 0; i < String(additionNumber2).length; i++) this.destinyNumb += +String(additionNumber2)[i]
    } else this.destinyNumb = additionNumber2
  }

  calculateMatrix(line = this.matrixField.value) {
    if (!line) return

    this.resetForms()
    for (let j = 0; j < line.length; j++) {
      switch(line[j]) {
        case '1':
          this.character += 1
          break;
        case '2':
          this.energy += 1
          break;
        case '3':
          this.curious += 1
          break;
        case '4':
          this.health += 1
          break;
        case '5':
          this.logic += 1
          break;
        case '6':
          this.work += 1
          break;
        case '7':
          this.luck += 1
          break;
        case '8':
          this.dolg += 1
          break;
        case '9':
          this.memory += 1
          break;
      }
    }

    this.temp = this.curious + this.logic + this.luck
    this.goal = this.character + this.health + this.luck
    this.byt = this.health + this.logic + this.work
    this.fam = this.energy + this.logic + this.dolg
    this.habits = this.curious + this.work + this.memory

    this.status = 'show'
  }

  returnString(val: number, text: string) {
    let str = ''
    for (let i = 0; i < val; i++) str += text
    return str
  }

  private resetForms() {
    this.character = this.energy = this.curious = this.health = this.logic = this.work = this.luck = this.dolg = this.memory = this.temp = this.goal = this.byt = this.fam = this.habits = this.destinyNumb = 0
  }
}
