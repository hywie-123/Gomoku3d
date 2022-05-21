import random
import time
import ai

rand_range = 40

def rand_cell():
    rand = random.randint(0, rand_range)
    if rand == 0:
        return -1
    if rand == 1:
        return 1
    return 0

oin = list(map(
    lambda _: list(map(
        lambda _: list(map(
            lambda _: rand_cell(),
            range(11))),
        range(11))),
    range(11)))

start = time.time()
out = ai.nextstep(oin)
end = time.time()
print("result: ", out)
print("time (s): ", end - start)
