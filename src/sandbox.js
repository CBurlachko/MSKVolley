import fs from "fs";
const stats = JSON.parse(fs.readFileSync(`../MIX_2022/Stats.json`));

const teamCondition = (points, div) => {
    const condition = []
    points.map((a, index) => {
        if (div[index] === 'Высший дивизион' && div[index] !== '') a = a / 3
        if (div[index] === '1 дивизион' && div[index] !== '') a = a / 2
    })
    for (let i = 1; i < points.length; i++){
        if (points[i] !== '' && points[i-1] !== '') {
            if (points[i] - points[i-1] < 2) condition.push('Down')
            if (points[i] - points[i-1] === 2) condition.push('Hold')
            if (points[i] - points[i-1] > 2) condition.push('Up')
        }
    }
    return condition.length > 5 ? condition.slice(-5).join(' ') : condition.join(' ')
}