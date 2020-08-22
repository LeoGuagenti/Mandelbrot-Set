(function(){
            var canvas = document.createElement("canvas")
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            document.body.appendChild(canvas)
            var context = canvas.getContext('2d')

            function belongsInSet(x, y){
                let real = x
                let imaginary = y

                for(let i = 0; i < 16; i++){
                    let tempReal = real * real - imaginary * imaginary + x
                    let tempImaginary = 2 * real * imaginary + y

                    real = tempReal
                    imaginary = tempImaginary
                }

                return real * imaginary < 5
            }

            var magnification = 300
            var panx = 3
            var pany = 1.3
            for(let x = 0; x < canvas.width; x++){
                for(let y = 0; y < canvas.height; y++){
                    if(belongsInSet(x / magnification - panx, y / magnification - pany)){
                        context.fillRect(x, y, 1, 1)
                    }
                }
            }
        
        })()