# M.Ready challenge

## Task 1: Merge Sort Algorythm:
to run a code: node merge-sort.js 

### Merge Sort Algorithm. Summary:
Merge Sort is a sorting algorithm that uses a divide-and-conquer strategy. It starts by dividing the unsorted array into smaller parts, continuing until each part contains only one element, which is inherently sorted. Then, it merges these smaller sorted parts in pairs, comparing and organizing the elements to create larger sorted subarrays. This merging process is repeated until the entire array is reconstructed as a single sorted array. Merge Sort offers stable sorting and consistent performance with a time complexity of O(n log n), making it more efficient than certain other sorting methods, especially for larger datasets. However, it does require extra memory space, resulting in a space complexity of O(n).



## Task2: Factory Design Pattern:
to run a code: node factory-des-patt.js

### Shape Factory

In our project, I've implemented a Shape Factory using the Factory Design Pattern. The Shape Factory provides a single method, createShape, which accepts a type and size to create different shapes, such as circles, triangles, and squares. This simplicity on the client side ensures that the client code only interacts with the factory to create shapes, abstracting the details of object creation. Each shape has its unique behavior, like calculating area and drawing, which remains encapsulated within the shape classes. This design approach enhances code extensibility and maintainability, making it straightforward to add new shapes without modifying existing code.

### Factory Design Pattern

The Factory Design Pattern is a powerful creational design pattern that simplifies object creation in a flexible and maintainable way. Its primary goal is to provide an interface for creating objects, abstracting the details of their instantiation from the client code. This abstraction promotes loose coupling between the client and the concrete objects, allowing for cleaner and more extensible code.

In the Factory Design Pattern, the client code interacts with a factory class that exposes a single, unified method, such as createShape in our case. The client specifies the type or parameters it needs, and the factory is responsible for creating and returning the appropriate object. This approach shields the client code from the complexities of object creation, allowing it to focus on its primary responsibilities.


