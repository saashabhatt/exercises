def print_upper_words(str):
    """This function converts strings to uppercase"""
    for words in str:
        print(words.upper())

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"])

def print_words_e(str):
    """function that only prints words that start with the letter ‘e’ (either upper or lowercase)."""
    for words in str:
        if (words.startswith('e') or words.startswith('E')):
            print (words)

print_words_e(["elephant", "Epiphany", "Hillary", "Nick"])

def print_starts_with(str, must_start_with):
    """pass in a set of letters, and it only prints words that start with one of those letters."""
    for words in str:
        for letters in must_start_with:
            if (words.startswith(letters) or words.startswith(letters.upper())):
                print(words.upper())

print_starts_with(["hello", "hey", "goodbye", "yo", "yes"], must_start_with={"h", "y"})