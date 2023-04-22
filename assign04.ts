abstract class Car {
  Wheel(): string {
    return '4 wheeler'
  }

  checkAC(): string {
    return 'AC is Available'
  }
  callFaciltiy(): string {
    return 'Call facility supported'
  }
  abstract Price(): number
  abstract getTotalSeats(): number
  abstract color(): string
  abstract GPS(): boolean
}

class Toyota extends Car {
  GPS(): boolean {
    return false
  }
  Price(): number {
    return 1000000
  }
  getTotalSeats(): number {
    return 5
  }
  color(): string {
    return 'White'
  }
}

class Hyundai extends Car {
  GPS(): boolean {
    return true
  }
  Price(): number {
    return 900000
  }
  getTotalSeats(): number {
    return 7
  }
  color(): string {
    return 'Gray'
  }
}

let toyota = new Toyota()
console.log('Is GPS Supported in Toyota', toyota.GPS())

let hyundai = new Hyundai()
console.log('Is GPS Supported in Hyundai', hyundai.GPS())
