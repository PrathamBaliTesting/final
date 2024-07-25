# Ask the user for their name
name = input("Enter your name: ")

# Greet the user
print(f"Hello, {name}!")

# Function to calculate the area of a rectangle
def calculate_rectangle_area(length, width):
    area = length * width
    return area

# Ask the user for dimensions of a rectangle
length = float(input("Enter the length of the rectangle: "))
width = float(input("Enter the width of the rectangle: "))

# Calculate the area using the function
area = calculate_rectangle_area(length, width)

# Output the calculated area
print(f"The area of the rectangle with length {length} and width {width} is {area}")
