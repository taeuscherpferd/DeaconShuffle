export class HomeLogic {
  private static shuffleArray<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  static generateMinisteringAssignments(ministers: string[], ministerees: string[]) {
    const localMinisterArray = [...ministers]
    this.shuffleArray(localMinisterArray)
    let dict = []

    for (let i = 0; i < localMinisterArray.length; i += 2) {
      if (i + 1 < localMinisterArray.length) {
        const key = localMinisterArray[i] + "," + localMinisterArray[i + 1]
        const ministersList = [localMinisterArray[i], localMinisterArray[i + 1]]
        const localMinisterees: string[] = []
        dict.push({ key: key, ministers: ministersList, ministerees: localMinisterees })
      }
      else {
        dict[dict.length - 1].key += "," + localMinisterArray[i]
        dict[dict.length - 1].ministers.push(localMinisterArray[i])
      }
    }

    const chunkSize = Math.floor(ministerees.length / dict.length)

    for (let i = 0, j = 0; i < ministerees.length; i += chunkSize, j++) {
      const chunk = ministerees.slice(i, i + chunkSize);

      //TODO: Randomly assign these people
      j < dict.length ?
        dict[j].ministerees = chunk :
        dict[dict.length - 1].ministerees = dict[dict.length - 1].ministerees.concat(chunk)
    }

    return dict
  }
}