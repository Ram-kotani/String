// Fruit names list
        const namesArray = [
            "APPLE", "BANANA", "ORANGE", "GRAPE", "PINEAPPLE", "STRAWBERRY", "BLUEBERRY", "RASPBERRY", "WATERMELON", "MANGO", 
            "PAPAYA", "GUAVA", "PEACH", "PLUM", "CHERRY", "APRICOT", "KIWI", "POMEGRANATE", "DATE", "BLACKBERRY", "CRANBERRY", 
            "COCONUT", "AVOCADO", "NECTARINE", "GRAPEFRUIT", "TANGERINE", "CANTALOUPE", "HONEYDEW", "DRAGONFRUIT", "PASSIONFRUIT", 
            "STARFRUIT", "DURIAN", "LYCHEE", "RAMBUTAN", "SAPODILLA", "PERSIMMON", "GOOSEBERRY", "JACKFRUIT", "TAMARIND", 
            "CUSTARD APPLE", "SUGAR APPLE", "SOURSOP", "LONGAN", "ELDERBERRY", "BREADFRUIT", "ACAI", "MARIONBERRY", "BOYSENBERRY", 
            "KUMQUAT", "UGLI FRUIT", "MEDLAR", "QUINCE", "SALAK", "YANGMEI", "CLOUD BERRY", "ARONIA", "JABUTICABA", "CAMU CAMU", 
            "BAEL", "CHESTNUT APPLE", "MANGOSTEEN", "LANGSAT", "MAQUI BERRY", "MIRACLE FRUIT"
        ];

        // Sort the fruit names array
        namesArray.sort();

        // Function to find character by index
        function findCharacterByIndex() {
            const array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
            const index = parseInt(document.getElementById('searchIndex').value);
            const resultAlphabet = document.getElementById('result-alphabet');

            // Validate index for alphabets (0-25)
            if (isNaN(index) || index < 0 || index > 25) {
                resultAlphabet.innerText = "Error: There are only 26 alphabets. Please select a number between 0 and 25.";
                resultAlphabet.classList.add('error');
                return;
            }

            resultAlphabet.innerText = `The character at index ${index} is: ${array[index]}`;
            resultAlphabet.classList.remove('error');
        }

        // Function to find name by index
        function findNameByIndex() {
            const index = parseInt(document.getElementById('searchNameIndex').value);
            const resultName = document.getElementById('result-name');

            // Validate index for names (0-69)
            if (isNaN(index) || index < 0 || index > 69) {
                resultName.innerText = "Error: There are only 69 fruits in the list. Please select a number between 0 and 69.";
                resultName.classList.add('error');
                return;
            }

            resultName.innerText = `The name at index ${index} is: ${namesArray[index]}`;
            resultName.classList.remove('error');
        }
