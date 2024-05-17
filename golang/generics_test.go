package greetings

import (
	"fmt"
	"regexp"
	"testing"
)

// TestHelloName calls greetings.Hello with a name, checking
// for a valid return value.
func Test(t *testing.T) {

	// Initialize a map for the integer values
	ints := map[string]int64{
		"first":  34,
		"second": 12,
	}

	// Initialize a map for the float values
	floats := map[string]float64{
		"first":  35.98,
		"second": 26.99,
	}

	sum1 := SumInts(ints)
	sum2 := SumFloats(floats)

	sum1g := SumIntsOrFloats[string, int64](ints)
	sum2g := SumIntsOrFloats[string, float64](floats)

    if sum1 != sum1g || sum2 != sum2g {
        t.Fatalf("How did you manage to screw that up?")
    } 
}


