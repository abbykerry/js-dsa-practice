def TreeConstructor(strArr):
    parent_count = {}   
    child_count = {}   

    for pair in strArr:
        child, parent = pair.strip("()").split(",")
        child = child.strip()
        parent = parent.strip()

        parent_count[parent] = parent_count.get(parent, 0) + 1
        child_count[child] = child_count.get(child, 0) + 1

        if parent_count[parent] > 2:
            return "false"

        if child_count[child] > 1:
            return "false"

    return "true"
