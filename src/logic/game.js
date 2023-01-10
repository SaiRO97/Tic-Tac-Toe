export class Game {
    constructor(turn) {
        this.turn = turn
    }

    matchCondition = (fields, letter) => {
        return fields.every((field) => field.value === letter)
    }

    verticalMatch = (schema) => {
        const firstColumn =
            this.matchCondition([schema[0], schema[1], schema[2]], 'X') ||
            this.matchCondition([schema[0], schema[1], schema[2]], 'O')

        const secondColumn =
            this.matchCondition([schema[3], schema[4], schema[5]], 'X') ||
            this.matchCondition([schema[3], schema[4], schema[5]], 'O')
        const thirdColumn =
            this.matchCondition([schema[6], schema[7], schema[8]], 'X') ||
            this.matchCondition([schema[6], schema[7], schema[8]], 'O')

        return [firstColumn, secondColumn, thirdColumn].some(
            (columns) => columns === true
        )
    }

    horizontalMatch = (schema) => {
        const firstColumn =
            this.matchCondition([schema[0], schema[3], schema[6]], 'X') ||
            this.matchCondition([schema[0], schema[3], schema[6]], 'O')

        const secondColumn =
            this.matchCondition([schema[1], schema[4], schema[7]], 'X') ||
            this.matchCondition([schema[1], schema[4], schema[7]], 'O')

        const thirdColumn =
            this.matchCondition([schema[2], schema[5], schema[8]], 'X') ||
            this.matchCondition([schema[2], schema[5], schema[8]], 'O')

        return [firstColumn, secondColumn, thirdColumn].some(
            (columns) => columns === true
        )
    }

    crossMatch = (schema) => {
        const firstCorner =
            this.matchCondition([schema[0], schema[4], schema[8]], 'X') ||
            this.matchCondition([schema[0], schema[4], schema[8]], 'O')

        const secondCorner =
            this.matchCondition([schema[2], schema[4], schema[6]], 'X') ||
            this.matchCondition([schema[2], schema[4], schema[6]], 'O')

        return [firstCorner, secondCorner].some((columns) => columns === true)
    }

    getGameResult = (schema) => {
        return [
            this.verticalMatch(schema),
            this.horizontalMatch(schema),
            this.crossMatch(schema),
        ].some((it) => it === true)
    }
}
