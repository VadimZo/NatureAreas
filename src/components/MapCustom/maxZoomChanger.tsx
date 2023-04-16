export function maxZoomChanger(firstCoordinate: number | undefined): number {
  switch (firstCoordinate) {
    case 45.908647512112796:
      return 9.5;
    default:
      return 12;
  }
}
