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