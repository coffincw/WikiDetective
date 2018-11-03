from queue import Queue

def generate_queue(file):
    f = open(file, "r")
    lines = f.readlines()
    f.close

    queue = Queue()

    for line in lines:
        queue.add(line.strip())
    return queue


# print generate_queue("../static/puzzles.txt")