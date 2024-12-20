 function find10thChar() {
        let input = document.getElementById("search1").value;
        if (!input) {
            document.getElementById("answer1").innerText = "Please enter a valid array.";
            return;
        }
        let arr = input.split(',').map(item => item.trim());
        let result = arr[9] || "Array is too short or invalid.";
        document.getElementById("answer1").innerText = "10th character: " + result;
    }

    function findLastElement() {
        let input = document.getElementById("search2").value;
        if (!input) {
            document.getElementById("answer2").innerText = "Please enter a valid array.";
            return;
        }
        let arr = input.split(',').map(item => item.trim());
        let result = arr[arr.length - 1] || "Array is empty.";
        document.getElementById("answer2").innerText = "Last element: " + result;
    }

    function validatePhoneNumber() {
        let phoneNumber = document.getElementById("search3").value.trim();
        if (/^\d{10}$/.test(phoneNumber)) {
            document.getElementById("answer3").innerText = "Valid number: " + phoneNumber;
        } else {
            document.getElementById("answer3").innerText = "Please enter exactly 10 digits.";
        }
    }

    function findRepeatedChars() {
        let inputArray = document.getElementById("search4array").value.split(',').map(item => item.trim());
        let word = document.getElementById("search4word").value;
        let repeatedChars = [...word].filter((char, i, self) => self.indexOf(char) !== i);
        document.getElementById("answer4").innerText = 
            "Repeated characters: " + [...new Set(repeatedChars)].join(', ');
    }

    function countVowels() {
        let arr = document.getElementById("search5").value.split(',').map(item => item.trim());
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let count = arr.filter(char => vowels.includes(char.toLowerCase())).length;
        document.getElementById("answer5").innerText = "Number of vowels: " + count;
    }

    function findLongestWord() {
        let str = document.getElementById("search6").value;
        let words = str.split(/\s+/);
        let longestWord = words.reduce((longest, current) => longest.length > current.length ? longest : current, '');
        document.getElementById("answer6").innerText = "Longest word: " + longestWord;
    }

    function convertCase() {
        let str = document.getElementById("search7").value;
        let convertedStr = [...str].map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
        document.getElementById("answer7").innerText = "Converted sentence: " + convertedStr;
    }

    function findLocation() {
        let str = document.getElementById("search8string").value;
        let word = document.getElementById("search8word").value;
        let index = str.indexOf(word);
        document.getElementById("answer8").innerText = index !== -1 ? 
            `Location of the word: ${index}` : "Word not found.";
    }

    function modifyArray() {
        let input = document.getElementById("search9").value;
        let arr = input.split(',').map(item => item.trim());
        arr.splice(2, 1, '6', '7'); // Example modification
        document.getElementById("answer9").innerText = "Modified array: " + arr.join(', ');
    }

    function countDetails() {
        let str = document.getElementById("search10").value;
        let words = str.split(/\s+/).filter(word => word.length > 0).length;
        let charCount = str.replace(/\s+/g, '').length;
        let spaceCount = (str.match(/\s/g) || []).length;
        let specialSymbols = (str.match(/[^a-zA-Z0-9\s]/g) || []).length;
        document.getElementById("answer10").innerText = 
            `Words: ${words}\nCharacters: ${charCount}\nSpaces: ${spaceCount}\nSpecial symbols: ${specialSymbols}`;
    }
