class Queue:
    def __init__ (self):
        self.elements = []

    def is_empty(self):
        return self.elements == []

    def add(self, item):
        self.elements.append(item)

    def remove(self):
        return self.elements.pop(0)

    def peek(self):
        return self.elements[-1]

    def size(self):
        return len(self.elements)

    def __str__(self):
        queue_str = "["
        current_element = ""
        i = 0
        while i < self.size() - 1:
            current_element = self.remove()
            queue_str += str(current_element) + " | "
            self.add(current_element)
            i += 1
        current_element = self.remove()
        queue_str += str(current_element) + "]"
        return queue_str