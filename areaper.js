// fuction to find the area of a rectangle
function findArea(width, height) {
    return width * height;
}

// find the perimeter of a rectangle
function findPerimeter(width, height) {
    return 2 * (width + height)

}

// input for width and heigh
let width = 10
let height = 8

// calculate the area and perimeter
let area = findArea(width, height)
let perimeter = findPerimeter(width, height)

// output the results
console.log("Area of rectangle:" + area);
console.log("perimeter of rectangle:" + perimeter);