const formulas = {
            'type1': {
                't': [
                    { formula: (inputs, phiRad) => (inputs.Sx) / (2 * (inputs.V0 * Math.cos(phiRad))), requiredInputs: ['Sx', 'V0', 'phi'] },
                    { formula: (inputs, phiRad) => (2 * inputs.Sy) / (inputs.V0 * Math.sin(phiRad)), requiredInputs: ['Sy', 'V0', 'phi'] },
                    { formula: (inputs, phiRad) => (inputs.V0 * Math.sin(phiRad)) / inputs.g, requiredInputs: ['V0', 'phi', 'g'] },
                    { formula: (inputs) => Math.sqrt(2 * inputs.Sy / inputs.g), requiredInputs: ['Sy', 'g'] }
                ],
                'Sy': [
                    { formula: (inputs) => 0.5 * inputs.g * Math.pow(inputs.t, 2), requiredInputs: ['t', 'g'] },
                    { formula: (inputs, phiRad) => Math.pow(inputs.V0 * Math.sin(phiRad), 2) / (2 * inputs.g), requiredInputs: ['V0', 'phi', 'g'] },
                    { formula: (inputs, phiRad) => (inputs.V0 * inputs.t * Math.sin(phiRad)) / 2, requiredInputs: ['V0', 'phi', 't'] },
                    { formula: (inputs, phiRad) => (inputs.Sx * Math.tan(phiRad)) / 4, requiredInputs: ['Sx', 'phi'] }
                ],
                'Sx': [
                    { formula: (inputs, phiRad) => inputs.V0 * Math.cos(phiRad) * 2 * inputs.t, requiredInputs: ['V0', 'phi', 't'] },
                    { formula: (inputs, phiRad) => Math.pow(inputs.V0, 2) * Math.sin(2 * phiRad) / inputs.g, requiredInputs: ['V0', 'phi', 'g'] },
                    { formula: (inputs, phiRad) => (inputs.Sy * 4) / Math.tan(phiRad), requiredInputs: ['Sy', 'phi'] }
                ],
                'V0': [
                    { formula: (inputs, phiRad) => (inputs.g * inputs.t) / (Math.sin(phiRad)), requiredInputs: ['t', 'phi', 'g'] },
                    { formula: (inputs, phiRad) => (inputs.Sx) / (2 * inputs.t * Math.cos(phiRad)), requiredInputs: ['Sx', 't', 'phi']},
                    { formula: (inputs, phiRad) => (2 * (inputs.Sy) / (inputs.t * Math.sin(phiRad))), requiredInputs: ['Sy', 't', 'phi'] },
                    { formula: (inputs, phiRad) => Math.sqrt(2 * (inputs.g) * (inputs.Sy)) / Math.sin(phiRad), requiredInputs: ['Sy', 'g', 'phi']}
                ],
                'θ': [
                    { formula: (inputs) => Math.asin((inputs.g * inputs.Sx) / Math.pow(inputs.V0, 2)) / 2, requiredInputs: ['Sx', 'g', 'V0'] },
                    { formula: (inputs) => Math.acos((inputs.Sx) / (2 * inputs.V0 * inputs.t)), requiredInputs: ['Sx', 'V0', 't'] },
                    { formula: (inputs) => Math.asin(Math.sqrt(2 * inputs.Sy * inputs.g) / inputs.V0), requiredInputs: ['Sy', 'g', 'V0'] },
                    { formula: (inputs) => Math.asin((inputs.Sy) / (inputs.V0 * inputs.t)), requiredInputs: ['Sy', 'V0', 't'] },
                    { formula: (inputs) => Math.asin((inputs.g * inputs.t) / (inputs.V0)), requiredInputs: ['V0', 't', 'g'] },
                    { formula: (inputs) => Math.atan(4 * (inputs.Sy) / inputs.Sx), requiredInputs: ['Sy', 'Sx'] }
                ]
            },
            'type2': {
                't': [
                    { formula: (inputs, phiRad) => ((inputs.V0 * Math.sin(phiRad) / inputs.g)) + (Math.sqrt(2 * (inputs.H + inputs.h)) / inputs.g), requiredInputs: ['V0', 'phi', 'g', 'H', 'h'] },
                    { formula: (inputs, phiRad) => (inputs.V0 * Math.sin(phiRad) + Math.sqrt(Math.pow(inputs.V0 * Math.sin(phiRad), 2) + 2 * inputs.g * inputs.H)) / inputs.g, requiredInputs: ['V0', 'phi', 'g', 'H'] },
                    { formula: (inputs, phiRad) => (inputs.V0 * Math.sin(phiRad)) / inputs.g + Math.sqrt((2 * inputs.Sy) / inputs.g), requiredInputs: ['V0', 'phi', 'g', 'Sy'] }
                ],
                'Sy': [
                    { formula: (inputs, phiRad) => Math.pow(((inputs.g * inputs.t) - (inputs.V0 * Math.sin(phiRad))), 2) / (2 * inputs.g), requiredInputs: ['V0', 'phi', 'g', 't']},
                    { formula: (inputs, phiRad) => (Math.pow(inputs.V0 * Math.sin(phiRad), 2) + (2 * inputs.g * inputs.H)) / (2 * inputs.g), requiredInputs: ['V0', 'phi', 'g', 'H'] },
                    { formula: (inputs) => inputs.H + inputs.h, requiredInputs: ['H', 'h'] }
                ],
                'Sx': [
                    { formula: (inputs, phiRad) => inputs.V0 * Math.cos(phiRad) * inputs.t, requiredInputs: ['V0', 't', 'phi'] }
                ],
                'H': [
                    { formula: (inputs) => inputs.Sy - inputs.h, requiredInputs: ['Sy', 'h'] },
                    { formula: (inputs, phiRad) => (Math.pow(inputs.t * inputs.g, 2) - 2 * inputs.t * inputs.g * inputs.V0 * Math.sin(phiRad)) / (2 * inputs.g), requiredInputs: ['t', 'g', 'V0', 'phi'] }
                ],
                'h': [
                    { formula: (inputs) => inputs.Sy - inputs.H, requiredInputs: ['Sy', 'H'] },
                    { formula: (inputs, phiRad) => Math.pow(inputs.V0 * Math.sin(phiRad), 2) / (2 * inputs.g), requiredInputs: ['V0', 'phi', 'g'] }
                ],
                'V0': [
                    { formula: (inputs, phiRad) => ((inputs.t * inputs.g * 0.5) - (inputs.H / inputs.t)) / Math.sin(phiRad), requiredInputs: ['t', 'g', 'H', 'phi'] }
                ],
                'V1': [
                    { formula: (inputs, phiRad) => Math.sqrt(Math.pow(inputs.V0, 2) * (1 + Math.pow(Math.sin(phiRad), 2)) + 2 * inputs.g * inputs.H), requiredInputs: ['V0', 'phi', 'g', 'H'] },
                    { formula: (inputs, phiRad) => Math.sqrt(Math.pow(inputs.V0, 2) + Math.pow((inputs.g * inputs.t) - (inputs.V0 * Math.sin(phiRad)), 2)), requiredInputs: ['V0', 'phi', 'g', 't'] }
                ],
                'θ': [  
                    { formula: (inputs) => Math.asin(((inputs.t * inputs.g * 0.5) - (inputs.H / inputs.t)) / inputs.V0), requiredInputs: ['t', 'g', 'H', 'V0'] },
                    { formula: (inputs) => Math.asin(((inputs.t * inputs.g) - Math.sqrt(2 * (inputs.H + inputs.h) * inputs.g)) / inputs.V0), requiredInputs: ['t', 'g', 'H', 'h', 'V0']},
                    { formula: (inputs) => Math.asin(((inputs.t * inputs.g) - Math.sqrt(2 * inputs.Sy * inputs.g)) / inputs.V0), requiredInputs: ['t', 'g', 'Sy', 'V0']},
                    { formula: (inputs) => Math.asin(Math.sqrt(2 * inputs.h * inputs.g) / inputs.V0), requiredInputs: ['h', 'g', 'V0'] }
                ]
            },
            'type3': {
                't': [
                    { formula: (inputs) => (inputs.Sx) / (inputs.V0), requiredInputs: ['Sx', 'V0'] },
                    { formula: (inputs) => Math.sqrt(2 * inputs.Sy / inputs.g), requiredInputs: ['Sy', 'g'] }
                ],
                'Sy': [
                    { formula: (inputs) => (0.5 * inputs.g * Math.pow(inputs.t, 2)), requiredInputs: ['g', 't'] }
                ],
                'Sx': [
                    { formula: (inputs) => inputs.V0 * inputs.t, requiredInputs: ['V0', 't'] }
                ],
                'V0': [
                    { formula: (inputs) => inputs.Sx / inputs.t, requiredInputs: ['Sx', 't'] }
                ],
                'V2': [
                    { formula: (inputs) => Math.sqrt(Math.pow(inputs.V0, 2) + (2 * inputs.g * inputs.Sy)), requiredInputs: ['V0', 'g', 'Sy'] }
                ],
                'θ': [
                    { formula: (inputs) => (Math.asin((2 * inputs.g * inputs.Sx) / Math.pow(inputs.V0, 2))) / 2, requiredInputs: ['Sx', 'g', 'V0'] }
                ]
            }
        };

        let selectedCalculation = '';
        let selectedType = 'type1';
        let formulaIndex = 0;

        const startCalculator = () => {
            selectedType = 'type1';
            updateCalculationOptions();
        }

        const selectType = (type) => {
            selectedType = type;
            document.getElementById('calculationSelection').classList.remove('hidden');
            updateCalculationOptions();
        }

        const selectCalculation = (calcType) => {
            selectedCalculation = calcType;
            formulaIndex = 0;
            document.getElementById('inputs').classList.remove('hidden');
            if (formulas[selectedType][calcType].length > 1) {
                document.getElementById('anotherFormulaButton').classList.remove('hidden');
            } else {
                document.getElementById('anotherFormulaButton').classList.add('hidden');
            }
            updateRequiredInputs();
        }

        const updateRequiredInputs = () => {
            const requiredInputs = formulas[selectedType][selectedCalculation][formulaIndex].requiredInputs;
            document.querySelectorAll('.input-group').forEach(group => group.classList.add('hidden'));
            requiredInputs.forEach(inputId => {
                document.getElementById(inputId + 'InputGroup').classList.remove('hidden');
            });
        }

        const confirmInputs = () => {
            const requiredInputs = formulas[selectedType][selectedCalculation][formulaIndex].requiredInputs;
            const inputs = getInputs(requiredInputs);
            const allFieldsValid = requiredInputs.every(inputId => inputs[inputId] !== undefined && inputs[inputId] !== '' && !isNaN(inputs[inputId]));
            if (!allFieldsValid) {
                const errorMessageElement = document.getElementById('error-message');
                errorMessageElement.innerText = 'Please fill in all required fields with valid numbers.';
                errorMessageElement.classList.remove('hidden');
                return;
            }

            try {
                const result = calculateResult(selectedCalculation, inputs);
                if (isNaN(result) || result === undefined || !isFinite(result)) {
                    throw new Error('The calculation resulted in an invalid value.');
                }
                displayResult(result);
            } catch (error) {
                const errorMessageElement = document.getElementById('error-message');
                errorMessageElement.innerText = `${error.message} Please check your inputs and try again.`;
                errorMessageElement.classList.remove('hidden');
                document.getElementById('results').classList.add('hidden');
                document.getElementById('result').innerText = '';
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    const focusedElement = document.activeElement;

                    if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'SELECT') {
                        const formElements = Array.from(document.querySelectorAll('input, select, button'));
                        const index = formElements.indexOf(focusedElement);
                        if (index < formElements.length - 1) {
                            formElements[index + 1].focus();
                        } else {
                            formElements[0].focus();
                        }
                    } else if (focusedElement.id === 'anotherFormulaButton') {
                        toggleFormula();
                    } else if (focusedElement.textContent.trim() === 'Confirm') {
                        confirmInputs();
                    }
                }
            });
        });

        const getInputs = (requiredInputs) => {
            const inputs = {};
            requiredInputs.forEach(inputId => {
                const value = parseFloat(document.getElementById(inputId).value);
                if (isNaN(value) || value === '' || value === undefined) {
                    inputs[inputId] = undefined;
                } else {
                    inputs[inputId] = value;
                }
            });
            return inputs;
        }

        const calculateResult = (variable, inputs) => {
            const phiRad = inputs.phi !== undefined ? inputs.phi * Math.PI / 180 : 0;
            const formula = formulas[selectedType][variable][formulaIndex].formula;
            let result = formula(inputs, phiRad);
            if (variable === 'θ') {
                result = result * (180 / Math.PI);
            }
            return result;
        }

        const displayResult = (result) => {
            const resultElement = document.getElementById('result');
            const unit = (selectedCalculation === 'θ') ? '°' : '';
            resultElement.innerHTML = `<strong>${selectedCalculation}:</strong> ${result.toFixed(10)} ${unit}`;
            document.getElementById('results').classList.remove('hidden');
            document.getElementById('error-message').classList.add('hidden');
        }

        const toggleFormula = () => {
            formulaIndex = (formulaIndex + 1) % formulas[selectedType][selectedCalculation].length;
            document.querySelectorAll('.input-group input[type="number"]').forEach(input => input.value = '');
            document.getElementById('results').classList.add('hidden');
            document.getElementById('error-message').classList.add('hidden');
            updateRequiredInputs();
        }

        const resetInputs = () => {
            selectedCalculation = '';
            formulaIndex = 0;
            document.querySelectorAll('.input-group input[type="number"]').forEach(input => input.value = '');
            document.getElementById('inputs').classList.add('hidden');
            document.getElementById('results').classList.add('hidden');
            document.getElementById('anotherFormulaButton').classList.add('hidden');
            document.getElementById('result').innerText = '';
            document.getElementById('error-message').classList.add('hidden');
            document.getElementById('calculationSelection').classList.add('hidden');
            document.getElementById('selection').classList.remove('hidden');
        }

        const updateCalculationOptions = () => {
            document.getElementById('hButton').classList[formulas[selectedType]['h'] ? 'remove' : 'add']('hidden');
            document.getElementById('HButton').classList[formulas[selectedType]['H'] ? 'remove' : 'add']('hidden');
            document.getElementById('V1Button').classList[formulas[selectedType]['V1'] ? 'remove' : 'add']('hidden');
            document.getElementById('V2Button').classList[formulas[selectedType]['V2'] ? 'remove' : 'add']('hidden');
            document.getElementById('SyButton').classList[formulas[selectedType]['Sy'] ? 'remove' : 'add']('hidden');
            document.getElementById('SxButton').classList[formulas[selectedType]['Sx'] ? 'remove' : 'add']('hidden');
            document.getElementById('tButton').classList[formulas[selectedType]['t'] ? 'remove' : 'add']('hidden');
            document.getElementById('V0Button').classList[formulas[selectedType]['V0'] ? 'remove' : 'add']('hidden');
            document.getElementById('phiButton').classList[formulas[selectedType]['θ'] ? 'remove' : 'add']('hidden');
            document.querySelector('.button-group').classList.remove('hidden');
        }