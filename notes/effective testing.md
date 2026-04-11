
---

test - a piece of code that verifies behavior
test suite - all the tests for a project
test runner - tool that finds and executes tests
assertion - states the expected behavior 
fixture - setup required for a test
deterministic - the same input determines the same output
non-deterministic - can vary in behavior (randomness, time, network, concurrency, etc)
monkeypatching - a technique to replace parts of the system under test (function, methods, attributes) with test specific implementations to control behavior and isolate tests
development dependency - package that is only needed during development and testing, not in production.

`assert` make claim about behavior; pytest will show a helpful diff when it fails
`pytest.raises` assert exception boundaries
`pytest runner` collect and run tests
