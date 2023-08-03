import React from "react";
import '../App.css';
import Pelicula from '../componentes/Pelicula';
import ListaPeliculas from "../componentes/ListaPeliculas";
import Movies from "./movies";

export default class Peliculas extends React.Component {
    peliculas=[
        {   
            "título": "Pinocho",
            "año": "1994",
            "géneros": [
                "Infantil",
                "Drama"
            ],
            "puntuaciones": [8, 8, 6, 10, 2, 3, 4, 5, 4, 9, 3, 9, 6, 10, 4, 8, 10, 1, 2, 8, 1, 9, 5 , 4, 4, 2, 4, 6, 9, 10],
            "id": 1,
            "lanzamiento": "1995-03-03",
            "originalTitle": "La redención de Shawshank",
            "argumento": "Narra las experiencias de un banquero anteriormente exitoso como prisionero en la sombría cárcel de Shawshank después de ser declarado culpable de un crimen que no cometió. La película retrata la forma única del hombre de lidiar con su nueva y tortuosa vida; en el camino se hace amigo de varios compañeros de prisión, sobre todo de un sabio preso llamado Red. Escrito por\nJ-S-Golden",
            "actores": [
                "Tim Robbins",
                "Morgan Freeman",
                "Bob Guntón"
            ],
            "posterurl": "https://hips.hearstapps.com/hmg-prod/images/pinocho-de-guillermo-del-toro-391473872-large-1665936039.jpg?crop=1xw:1xh;center,top&resize=980:*"
        },
        {
            "título": "Gudfadern",
            "año": "1972",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [6, 10, 4, 10, 1, 3, 7, 2, 3, 3, 3, 4, 2, 5, 6, 9, 10, 8, 7, 4, 8, 9, 9 , 10, 4, 6, 2, 9, 7, 7],
            "id": 2,
            "lanzamiento": "27-09-1972",
            "originalTitle": "El Padrino",
            "storyline": "Cuando el anciano jefe de una famosa familia criminal decide transferir su puesto a uno de sus subalternos, una serie de eventos desafortunados comienzan a sucederle a la familia y comienza una guerra entre todas las familias conocidas que conduce a la insolencia. , deportación, asesinato y venganza, y termina con la elección definitiva del sucesor favorable. Escrito por\nJ. S. Golden",
            "actores": [
                "Marlon Brando",
                "Al Pacino",
                "James Caan"
            ],
            "posterurl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBMTExcTERMXFxcXFxkXFxcYGhcYFxoXFxcZGRkZGBcbHysjGhwoIRoZJDUkKCwuMjIyGSM3PDcxOysxMi4BCwsLDw4PHRERHTMpIyg2NDExMTExMTEuMTMxMTExLjMxOzExMTExMTExMTExMzExMTEzMzExLjExMTExMTExMf/AABEIAQwAvAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBAwQHAgj/xABLEAACAQIEBAMEBAgMBQQDAAABAgMAEQQFEiEGMUFREyJhB3GBkRQyUqEjM0Jyc7Gy0SQlU2JjgpKztMHh8BU0dKLCQ5PE8RYmNf/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACwRAAICAgIBAgQGAwEAAAAAAAABAhEDIRIxQQRREyJhgUJxkaGxwYLh8DL/2gAMAwEAAhEDEQA/APGqGlKAxSs0oD3/ANnUWnL8PZy901XJvbVvpHoOXwr4zPBQnNMNI0rB/Cm0prIDFSltr8rM5I66R2rV7LsPGuXxFGLars3mJAcsdQAvZbdhXxxDhcE2Z4TxiPE0SWUnYldJi1b7bl7d6yLlvqPzJMP40JmYBw7eEC1rtoN7C+5teu0IOwqJz7C4LXHNiUj1RlmVmAsAFNy3cDbn1tRhE1cVxZ60H0eQYhlERRg5JA2t+uq5m/EbhWGHw6Lc2jlkB0kE21BAAQQb7EjpzJAqsZJi8RLIY58TJchguqyoWKkGygC5DbBT3NgbeWrkqLLGy4cAYzCDARCN410xgSglVYSafOXB6k3Purxni0wnFzHDW8IuSluXTVp9NV7V6u8UsETqZm1AhlAKEFVKl1ba176h2sw9RVNx+S4XEEmNjHMWZfC0hNbA2BCkWBbdrCwA+dRHKrLSxSrRRa+SKk82yebDsRIuwNiw3W+22oe8fOoxhW6d9GLTXZis3rFKkgUpSgFKUoBSlKAUpSgMmlKUApWaWoD3v2XmI5dD4QHIh9rHxATqv8f8qxnuKw6Zng1kjJkKShW0k6dQXT035Nv0v0vWfZhideXQ2jK6QU6WbST5hvyP671nPce6ZjgkGHZwyzDWNO2pVuQb7Wtc3tsdr1kXRZxXk3tc4h8aVcNA5Kx/jNBBDyEjym3PSB82Par9xvnYwWEkmH1z+DjHd3B0/AAFv6tefcF5MCrzTjXI7c23YHmxJN9ySbmqzkoK2aY4Obo28E/SJoTA6qYfMA24Ivfa3Ubnbb02q0YLguHQA7MzAhtZN2BW1iL8jsPlUjl0aRrZQBbt61KYWQ1yRycpbN53FVE+I8pjBudz69elMfl8Lga0G3I23HS4PSu4PXPiHrWahFaRjGU29spPFmRqQTMSwNrPvq0h1bw7Dlcgb22577CvMeKMDFBL4cTawosXG4LdRfkWHI25bDmDf3mVRICjC/avOPaBkkgCmKMMLMGPmJQXBJUs1lvbeyg89+dMOSnXg0yQ5R+p5maVskWtddpxilKUApSlAKUpQClKUBmlYpQH1egNfNL0B6r7PONYosOuHmQ6k8qstrMpuRcdD0rXn3tBYYuJ4ox4cWsMpO7+IADvby2sLc638A8AwyQR4maVyzjUETSFCnkCSpJPXpX1nXs6jbGQqk7COUOXDaTIPDAPk2AN7jmNrdax/F9Db5eP1Iv2g8QrjjhxGNMaF3ZSd9XlAO21rXt7zXPkOalWK9Lkj519+1HIosB9HEDOQ4luX0liVZDe4A+1bl0qr5WxZ1A6n/Sqzjyjs3wzSlUT1rLsw1qCrcuYqTixLD/Wqtw/CU+ruD9YWIsfdU/LAbA7+6vNlp6OxxT7JBMe3pWuXEt1uK04WVFF2Ki3U2rpSaFr/hV27cx76nbXZm4xi+j5jkN7iuXOJkspl0lbi4brboOhPpXfLCjL5HUn0O9UfivHywWljPl1aW327/D3+hq0E+VCk05FT4qikmaaZ7+RwVWxAWJmKXC2AVb+GB31E3POquRVyKl8JPYoJJAJGuTcxowa3XzEpe38z1FUwmvTxu0efljTMUpStDIUpSgFKUoBSlKAyaxSlAKUpQHu3sij/i9D4rPdm8pI0p5j5F2uB158zWeKMojkzLBSNiZI2JkCxhyCdCavJ9nV9Vu4sK5PYvHCMESukyF28TfzAg2W46C1q28YwZccfgjiCgkLtqFwAVCEx+J2HiabX53PS9ZFzk9uGEiOFjldiJEk0xjzNqDjzqd7DZQ1z9m3WvLMuzDwgCiAve+o32HQAV7txtkseLwckQCawpeIjTs6C62PQH6p9GNfnpPSrJJqmIycXaLLHxjilIYhD3utgfkRU3wnxNPiJxEyAhgTZL3Frb+tUvCZfLLsqH1Y8v8AT4VZOCsGYMeiuQTpJNuxF6wywxqLpK6OrFPK5K7o4eOcLNBO0UkjspAZLk209rdxyqEhkKkEMwA6gkHbp91ezcU5RDi2KyjkSVYbMLjoe3Lb0qvQ8FwxsNYZ1+0Gtv0uBYj/AF6WrOHqYKNPtFpenlKXJPsqOCxEniK2GmfWSPIRoJItyIJU335kHnXoWeYdpMK3iKC5UFlttqNvqn5+vKpjKcJDh0CxqFS+ruSx6kncn31zZzitVwnQXJ7Vz5M3OSaXR0YsbVplCxOHjXBPOAyul4rEW8z2W1juLC599Uo16Dx7mscuFCr4etprvo3JChxdzb6w8otva4715/XoYL42zg9S/no+aUpWxzilKUApSlAKUpQClKUApSlAe0exrMYfoZiVHEiOxcrG7Bixup1qpHKwsTfbtTjjOcKuPwXiwyO0bsWYxODpZdKBAygyWcq2wNrbb18+w/FlsLJF4bAJIT4m2htQBte/1h+oipLj3MXgnwUn0Z3WOVmZ/JpAaNkKhr7MA2rewOgb9svc0S9i0R5glgQsvf8AEzA/IpevAuJcD9Hx8qSRsqGR3QFSt4nclCAwG1tveCK9zy/PI57iFWcgBiAUBCk2BOpgK849uULGTDTGJkurxktoN9LBlF1Y/aY71EJJ9EuLjLa2fWQYfD6LxoV22BJNz33qMyEBswZ5HFxcBb7giw/fXFkOPZEAN9v1elVvG4hjKz3IOom/XnXPDE5SkrPQyZYxjF0e4ZhiovrXCCwuSQN7dzXJgcdqbwpLarXVujp3Hr3H7xXn2TZXLiAk2LErx6gFCgm4LWLE9F51b8Pm2HbRCy+E6ACO4Kgfkge7p8RXLkw8Xp2zTHO11SJLFwX6m4vbesrh7LYjmNz1rrCd+dczvYk1ija7PHc8zB5pCWsAt1VVFlUX6DubbnrUaa6MetpXHZ2HyY1zmvdikkqPCm25NsxSlKkqKUpQClKUApSlAKUpQGaUrqy3AyzOI4UZ2PQdu5PID1O1G67HZ657D8RM2FkRowI0kOiS9ixIBZdNt7bb+tulRHtOzpp5dMUiiKIGwvtI5+s1+tuQ+PepLJcNjMowwLqrxaiztG7PoLWuzAqNK7AbXHU1JLgsvzMajEqyHfxI7K9x1bbS/uYGuOWVcqel/J144cVy7/o7fZtkTYXDB2H4WcK73Juq28icvyQTf1Y1q9rWUviMAzL9aBvGAHVVBDj+yS39WqzxXxlmmDxBw58FgbNGwjN3QkgEjVYG4IPqO1S2Ax+LmQHGzqym2qGNFVHU80dyCzA9QLdjcVpPJGCTZnGE5yZ55h5FfBkr+MQ2J9P/AKqGweFeWQKLFiebMFHzY71O8Z4D6NiHeFSkEhuqj6qk7lPde5Hp7jUZhIjP5Ftcbi+1ItJOSembS+dqMu149y54TKMZIiJiMeiRrsqodRtbYdAPTnUphsn0Hy4xpbWIEkauoI5Wv9X4Gqxl/BuoBpMRb80cviaseCy+SFQizAr0NrH1+NcWWS/C1+lHbii/Ka+9k1DjNtL2DDY25W7io3AyjEY2LDxm4F5JSOiof32HxqtZ1i5nmWDDsS5+sb7D87tzq75dhIcky+TEOwad1uWe41yEHw41A303ufmTy2tiwLTl+hlmz8U1E8m49wUcGPxMUX1FkJX01AMV+Ba3wqCtW7G4h5ZHlkOpnZmY92Y3J+ZrWp716S6PL7YAvy99fNqlsvzSXDeVAjKWD2ZQQ1tratm09CL9K7cvz+IafFw6eV3e6qpB18wUbnbpuLbdqhtrpF1GL7dFcparphswwJWNAyLpRkJeEXOvqSLjUO/Kt65Ck2rwGjkOgKPDEe1jfUAGuG7ms/jV2mjRYL6kiiWpVrxXCM6hiYyLW6cqgcwwDRncVeOSMujOWOUThpSlXMxSlZFATOAyY6RLiCY4yNS8g7j+YDyH847dr16Pw5muVCJY40SMtp1AMQ5I+05N2+O1U/PcIskIkedfFCg6WkAOmwsPD3HLsR7qrcEllZdIOq25FyLHazdDXM4/FV2ddLG6r7+T9GINKAreSMje9idJ/aFUPinBnLXTH4EDwSw8WLkqlvqlR0Um49CR0O1YwXEGOwkCrHK+g/aAZVJ+y3T3XPw5VbMvzvCyYNocybTqTT4mlijC1w6ECwfa+nnde1YcXFpdo0ppNrv/ALsg+Jc+GbGFIIdEkZYtIzWVVaw0mwJNyFN/T1NuBs2lwDvDOpZltYA+VgdwwJH1T7r+gPKJ4QnCTE393S9jtsa6vaNdpo5eYeMWPchmv+sfOtWk58JdfuRbji5rsjs9z+XEjS+lV1atKjryBLHc7Go3CYho2DKSD3HOtFb8Kmp1UlVDELdjZRfa5PQDqa6VCMVSWjk5ycuTeydwOdyIbie9xbSQx36bEVqm4jmsQGa/wtuK5cbl6oPx0LHsjlz8LDeuXBPGrhpVLoNyqnTrtyUtzUE8yBe3zrP4UHujeWefVl54L8DBRfT8c3mku0cfORwDtpU9zc6jtYrvvUNnucYvOcUkapzJWGJblUB5sx6mwuzHt0G1Qud5m+JlaWQKCQqhVuFVEUKqIDeygAUyHNZcJOk8DWdDff6rDqrDqpGxq6hTb8mEp3ozxHl64bEyQK/ieG2gvawLKBrsOwbUPhUbau/MMUJ8RJMwt4kjyEXvbWxa17C9r9hyrlmj0mx+dWRFeT7hkuNDcibg9VPf3HqK0OCDY9KA1sdrqD1Gx9R0oR2jTas0JrFSQS+D4jxkYsmJkt9lmLr8Fa4FaMXnE0v4xg39VR+yBUfSo4r2J5P3BNKUqSBX0o3r5rNAe18NBRh0jPmUoBYnUOXK5rzjiPAfR5nSw0sdSbbD0A/30qwcJZypRIyTcAD6pPzNS3EmTjELccxe3yryYTeLK1LpnruCnG4kXw1MmKwWIhIBljUMvfTbmp9/+96+uFsraaJ8LKt433VjzjdQdDr2Iv8AEEjrXJw7ksuGmEoOxUqRfowBI+dXzh+VIkuQL0yZVGVQenv8goScHyW+ih4/hHw1EabyJe5vpL2O7Abg2JAtfb4g1WuJ8U7OsTm/gro/rfl/ft/Vr03iniOKK5exO7KNidQ5W9eW/vrx6ZyzFmNyxJJ7km5NdXpnKfzS+xy+pqEVFfc10FKu/DvBMr2aay33AO5+VdU5xgrZywg5PRUsNgpJCAqnerhknBkMjqJJZWGm7KsaJuTYAOXbbnvpq6ZfwoFG1796lsJwnHqBkudiLX23t0Fcss05f+dG6hCPZWv/AMNyiDzYh3O34sSM/wAbooYn4AD1qTyPLMjlJSHCqxUXOtZTy7lzVlg4fhXZVAH++td0GXRxqQigXHQUi8lbKPgfmXHuDLIVAUF2IUCwA1GwA6AV8vNfYi9bM0i0TyofyZHX5ORXNaupdGd0fJXtvQueXTt0+VdmVYHxmK6gtlLEkX2BA/zqcxPDkfgs6s2tQD5itt7HcWuNj3qsssIuma4/TZMkXKK0VUUrvxuVyRrqIuvUjcD39qj6ummrRlOEoOpKmKUpUlBSlKAVmldU+H0FRzJVGPYaxcD5EffUWSkS3DgMbB2fSFPQ7/eP86vuFz6F7KjqTcC1xfeqrhchEsayBmAtuCqyD3cww++kWXxLqjZBqA8rBWU9wblq8/KseR23s9THygkktEhm/EgjkKFSLEqfS/1W91jUdPxmwWyLv3N+1VzO0ZZCrkkgDnf/ADJrgraHpMdJtWc+X1U+TSOnHYt5WLuxJPy9w7VzUpXUklpHG227Zuwket0X7TKvzIFfppMEoOwr838NrqxWHHeeIfORa/TJesssU2rLxk0tGY0A6VtrSHr61VVA23petWqmqrWD87e0LBiHMcSg/lNf/uKJP/KoMCrn7aI7ZkzD8uKNj8AU/wDGqWDWi6KvsluH3VGLObKbLffvqI91l/VVkGLV4pDq+srEf2bCqMGFxqvpvuBzt6X61K5tiYFKDDeJYoPEVmJAewuFJUEbg3G47Htjlxc2d3pvV/CjxrR95zi2WIR6t3ALAdFHIX9Tv8Kgb1tmcsxJ61rrWEVFUc3qMryT5ePB80pSrmApSlAfSc967531CJm56Sp9yu1j8jb4VHVL5RjjGRp2sLEjmfS/bc1WXVl4dlqy7MIgti4W9uZHO3v91dUuPUg6VMjDkiXdmPQFVvb31x4biR7fWP3V2HiIhSSxtbv99ec8e7o9BZnRUuKcJ4Xh+INOIcM8y3vp1OfDU22DaRe3QEX3qBrqzPFGWV5G5s1/h0HytXLXpJUjzpO2KUrNSVJfg5L47Cj+niP9lwf8q/Qn0ivz5wW1sbAez3+QJr2EZiK5s8qZrCNosiz1zZvmRhieVY2kZR5UT6zEkAC/Tnz9KiUzAd62DMB3rL4hfgTceIJUEixIBIvexI3F+tDiKg2zH1rTiMwsit/S6D+a0TMPvQ1PMjgUH21b4yN+8Cj4rJJ+8VRCauvtTm1vC3811+RU/wCdauO8FFFhMteONEaTDFpGVQC7WTdiPrHc8+9dMJaX1M5KmU41uxw/CP8AnHmbnc359ffWm9bcVIGa47Lf3hQD94NaFTTasGskVg0IFKUoBSlKAVsRrVrrNAdMc1qzPiSVtfnXLWKrxRfm6ozUpw5lLYqQxq4QhS1yCeRUW2/OqLrowuKePVoYrqXSxBIOnUGIuPVRUytrXZVVey2p7P5D/wCun9lv31ycQcHPhYTM0ysAyjSFIPmNuZNWDMywyZXDG/hxb3N95E6135pgJsVlUSRKZJGSFt2AJsqliWYjf41xRy5E05S1dG8oR8LxZ5tkEmmdG7Fj/wBpq5pmR71XMNw3jUxAg8BvFKFwt0to5FtWrTa+3PntUviOF8xjRpHw7BUUsx8SI2VRcmwck7dq1zJSa2iMekSaZn619nM/WqauMPerXkfB2MxcAmR44wx8gk1gug/KFlNlPQ2358rGsnjrsvyRvhxryOEjBd2NlVdyT6CsZrmwVVw6MrBH1yyDcNKFKBIz1RAWF/ymJI2Av2Znl0mCw8eF1ok2J8dsRMl20YeFdbKrEKQpWxPK5uKor4aa0Nl80/4qMHzkagitp6KzXCnrpbpYm0cd7Ic0fXE+K8RU9GP3j/SrvwKmDzWGCDFgtJglcCPUVEkb6QrG25C2UEAjcDobV5o+qQhVBZidgvmJsDyA51I8ETtFjoRuNbiFxy8sv4NgR/Wv8K34/JS7Ri5XI6eP8Fg4ZlXA6yhViWLh4yQ5T8GfrWDI4JJN7bbbmsVK55GUTDqwsywupHYjFYgEVFVpHoqz6NfNL0JqSBSlKAUpSgFZrFZoBWKzSgMVmlqzQHpmar/ESn+ji/vEqdwU7x4DBGNtJZsGh5bo7IrDfuDURmyf/r6n+jh/vUqYjX+LcAf6TA/3iV59Wv8AJnRe/sTGj+MU/wCjk/voq1Z5ijh8Hi3xcgs7TLCNr6HTTFGAOZJufcd+Rt2OLZknrg5vung/fVU454TxuLmknmmjGHiV2jRS+pUVS2yadOtiBck/qApCKbVsiT9jyYPtVqxXFWOwzKkOKkCiGBgrESC74eN2+uG/KYm3IVUb1I8QfjV/QYX/AAsNd3FPsytl6yLPosyZIsbK64hkOH1hV8OSN5kdgNABjkZFMd7abG/ParBg+HWhTEZjiQGxXgyNHGm6QKsTBI0sPMwUBb9Ol+Zj+Bv+F4CA4hsVFJNp87g+Zbj6kUbAN91zboNhBY7jafFSyyRM0SQxO8KA7hgyAO/RmIJFuQBI3uSedqTk1HSLaS2RnswzqLCYovKkj+JH4SiNQzamdCBa456bbXO9eqYPiXA4mRo0kV3S7HUjWURnd/EK6AAbea/a1eZZBxLh1luMCkcsupGmjOoo0ilQ0UT+RNzuL8iRy2qK4kzuSRnhULGgIVwgQNIY7qGlZFXxD2FgB0HWrTx837CMuKPU8Vl2U4u7EYdzuSUkCtuSxPkYHmWJ9Sa8g4mEAxDjDIyRqdKhixY6dix1bi56dBavjNPxWG/QN/iZ6cR/81P+mk/bNWxY3B9tkSla6I6lKVsUFKUoBSlKAVmsVmgMUrNYoBVn9nOSx4zFeHNcosbOVBI1WZVAJG4F2vt2qs1e/YmP4bJ/07f3kVUyNqLaLR7RecwfK4iYMRNpIUBo3nnI0kCwZddrEEbdq1LjsmCBPpK6F06UE+I0jQQV0qHsLEAi3IgWqJzHhqDH5ri0meRTGkLAoVsQYkBBBU78q48p9nUDfSHmxDJHFLJGp8gISP6zyMwsOvQWte/bkjGCW5Px+5dt+xWeK+JmmxAfCvLGkd1jPjTM5v8AWe7uSuqw2FtgL3q2eynCSY3XJisZPKkbBThzJKUbUDYy3NmQ2PlHO2+2x5859msSSYZYMQxSaQoxcKSAEeTUpWwPlQi3cirtwXw9h8AZY4JWdnMZdXKFksG07KBa9zz7VpPJFRqJWMXeyucLcP5dHlseKxUAkL6S7HUTeSTw1CqCAACyj76r3tgy/DQzxDDgK5jtIgYnSqBUj2JOnyi3uUH1NyyWGKXJoUml8FNCEyEoukrMGU3fy/WVRv3qv4TgvCYl2aXHM8shZ9GqMy6CbqZFI1aipUnYW1W6XqIzqTlJvTZLjqkcXst4fixUcpn80ayxtoBtqZEk2b+b+EHI72rVwnw4v/D8TjXbUWw8yxoOQCg3Zj1N1FgOVut9rdwDlv0NsVhw2sJMlmtYkPEri472YD4VvyvAYdMA+Hjm1QWlUylltpbVrbUPLYXO/LaqyzPk6ft+hdQ0jxjJvx8X6VP2xXzmv46T9I/7Rq94zgZYcRhTFMSrygHWASCqmS4IsCCEI+VdmI4CwzyP/CH1k62UaLgOSQSLXANjb3Gtnngt2UWOT0efZl+Lw36Fv8RPWOIf+an/AE0n7bVc8Lwek+HjJlZWTxIxsNJCYiXzEc+p2vUP7QMnTDyLIjsxmeRmBtsQVO1vz/uqY5oOXFPYljajZVaUpWxmKUpQClKUBmlKUApSlAKvnsR/56T/AKdv7yKqHVp9mmdRYPF+JiLhHjaMsATpuysGIG5Hltt3qmRNwaRaOmek5J//AGcb+hg/YSts5/gOZfnY7+7akOfZUk0mITERiSRVV31vuqgBRpOwtYcgKj8Hn+BIxmGnxCoJJZhe9g0cygakexB2Jri+a7p+P2NNE1jm3y/9L/8ADnr6ypv4di/zcL+xLVfzvi3BJJhFSYOscupmUFgq+DJGCxA33cGw3sDXZBxNlyYiRhiF1SJGWYn8H+D1KqqbbNvcj1FVcJV0+v7LKrIjFqW4fVF3LJEoHcnEqAKkuEshhy8qrtrxMoYlyDySxcJ2UXW55kn4CFfNcOuVrhxPG0kek6QwuwjxAc6e5Krcd7ipfFcSZe0sE3jgkCRVsbBVkUEmQEXX6ij3t8rS500k6bf+gqu/yJDJ2/hON/Sxf4aOq3w438RyD+ixH65K78uz3CpPiXbExaXkjZTrG4WFEP3qahclzCFcsfDNPEJNE6AFhYli4Fj2NxY+tRxlXXmP8FrX8lmzNvwmD/SH/DS1zZ7mEWDMmIkYlpFRVQWuxj1EW/tm56bfHizHO8MWwzCeMhHu1iCQGiaO9uwLC/Yb9K5M6jy3EyiWXEKSAFsJAFsCTy59TyNUUdrknX5fUs3p12Yw2JLZU7nZnSZjbbd5ZCbem9U3inO2xcga2lFuI16gG1yT3Nh7rfE2b/iMBwLxJIgJEwRNQXYyyFAAeWxFq8/rrwQ3JteXRjklpJexilKV0mIpSlAKUpQGazWBSgM1ilZqAYrNKUB8mlDSpApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQGaUpQCs1iulMKxAItY+vegOeldH0N7gbXIJ59rfvrqiwy2GqM3sLnVt+v0NQSRZpUpHhVP8A6Z5kfW7E+voa+VwYv9UnuCRyN7Wt6ipII2lSv0ZAN4ztz83oPWkOEX8pCTz59ztbflsaAiqVJeCgFvCcn0vY2Njbf31tGEQgHw2AN+Z32v8AzvSgIilSMUCDnHI3T0uDY7g97/Kt64SOwJibcXHm9AeWr30BD0qVhwikkeG5tfmQO1rb7gWPzr7GDTf8G25svmG23Xzeh+dAQ9KlZMOineJiLdDfcHfk3LcVn6IhF/DcX5XI7fnd6AiaV3YvDeYeGhAsOduZPU3IHStYy+X7H3r++gOWlbZYypswsfgf1VqoBSlKAUpWRQCgalYoDqCJovrOvnaxtYm1vfbete32/uNaaUBtFvt/cazt9v7mrTSgN238p+1W9HjAsSSe92H3VxUoCSOKToALH133v2618yYiMnkLehYfqFR9KAkUxSAWsvvu3U3+zX39MT7K9PtfP6v+7VF0oDqlcFiVcL2Hn7e6vm/9L+3+6uelAb7n+VH/AH/urOo/yv3v+6uelAbnY/yl/i3+Yr58Z/tN8zWulAfTMTuTevmlKAUpSgP/2Q=="
        },
        {
            "título": "Gudfadern del II",
            "año": "1974",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [2, 5, 1, 1, 8, 4, 2, 3, 10, 10, 4, 9, 8, 9, 7, 6, 6, 9, 9, 4, 1, 8, 4 , 5, 7, 7, 7, 1, 10, 6],
            "id": 3,
            "lanzamiento": "1975-07-28",
            "originalTitle": "El Padrino: Parte II",
            "storyline": "La saga continua de la familia criminal Corleone cuenta la historia de un joven Vito Corleone que creció en Sicilia y en la década de 1910 en Nueva York; y sigue a Michael Corleone en la década de 1950 mientras intenta expandir el negocio familiar a Las Vegas, Hollywood y Cuba. Escrito por\nKeith Loh <loh@sfu.ca>",
            "actores": [
                "Al Pacino",
                "Robert de Niro",
                "Roberto Duvall"
            ],
            "posterurl": "data:image/jpeg;base64,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"
        },
        {
            "título": "12 edsvurna m\u00e4n",
            "año": "1957",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [3, 5, 3, 3, 10, 3, 4, 1, 6, 10, 2, 8, 4, 6, 8, 6, 1, 10, 4, 5, 9, 3, 2 , 4, 8, 10, 10, 7, 9, 6],
            "id": 4,
            "lanzamiento": "29-07-1957",
            "originalTitle": "12 hombres enojados",
            "storyline": "La defensa y la acusación han descansado y el jurado se presenta en la sala del jurado para decidir si un joven es culpable o inocente de asesinar a su padre. Lo que comienza como un caso abierto y cerrado de asesinato pronto se convierte en una historia de detectives que presenta una sucesión de pistas que crean dudas, y un minidrama de cada uno de los prejuicios y preconceptos de los miembros del jurado sobre el juicio, los acusados ​​y entre ellos.Basado en la obra, toda la acción se desarrolla en el escenario de la sala del jurado. Escrito por\npjk <PETESID@VNET.IBM.COM>",
            "actores": [
                "Henry Fonda",
                "Lee J. Cobb",
                "Martin Bálsamo"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg"
        },
        {
            "título": "La lista de Schindler",
            "año": "1993",
            "géneros": [
                "Biografía",
                "Drama",
                "Historia"
            ],
            "puntuaciones": [2, 6, 7, 8, 8, 6, 2, 4, 6, 2, 3, 3, 5, 9, 5, 10, 9, 5, 5, 2, 10, 4, 8 , 7, 4, 10, 2, 10, 4, 10],
            "id": 5,
            "lanzamiento": "1994-03-04",
            "titulo original": "",
            "storyline": "Oskar Schindler es un hombre de negocios alemán vanaglorioso y codicioso que se convierte en un filántropo improbable en medio del bárbaro reinado nazi alemán cuando se siente obligado a convertir su fábrica en un refugio para judíos. Basada en la historia real de Oskar Schindler, quien logró salvar a unos 1100 judíos de ser gaseados en el campo de concentración de Auschwitz, es un testimonio de lo bueno que hay en todos nosotros. Escrito por\nHarald Mayr <marvin@bike.augusta.de>",
            "actores": [
                "Liam Neeson",
                "Ralph Fiennes",
                "Ben Kingsley"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,500_ AL_.jpg"
        },
        {
            "título": "Pulp Fiction",
            "año": "1994",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [2, 9, 7, 7, 7, 2, 2, 4, 1, 9, 6, 3, 4, 10, 8, 6, 7, 5, 9, 4, 3, 5, 9 , 3, 8, 2, 6, 7, 4, 4],
            "id": 6,
            "lanzamiento": "1994-11-25",
            "titulo original": "",
            "argumento": "Jules Winnfield (Samuel L. Jackson) y Vincent Vega (John Travolta) son dos asesinos a sueldo que buscan recuperar una maleta robada a su empleador, el jefe de la mafia Marsellus Wallace (Ving Rhames). Wallace también le ha pedido a Vincent para salir con su esposa Mia (Uma Thurman) unos días más tarde cuando el propio Wallace estará fuera de la ciudad. Butch Coolidge (Bruce Willis) es un boxeador envejecido a quien Wallace le paga para que pierda peso. Las vidas de estas personas aparentemente no relacionadas están entretejidos y comprenden una serie de incidentes divertidos, extraños e innecesarios. Escrito por\nSoumitra",
            "actores": [
                "John Travolta",
                "Uma Thurman",
                "Samuel L. Jackson"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY500_CR0,0,336,500_AL_.jpg"
        },
    
        {
            "título": "El club de la lucha",
            "año": "1999",
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [6, 5, 10, 10, 6, 6, 6, 7, 2, 8, 10, 2, 3, 5, 1, 3, 10, 3, 6, 2, 6, 2, 10 , 4, 4, 8, 9, 10, 10, 5],
            "id": 7,
            "lanzamiento": "1999-12-25",
            "titulo original": "",
            "storyline": "Un narrador anónimo en primera persona (Edward Norton) asiste a grupos de apoyo en un intento de dominar su estado emocional y aliviar su estado de insomnio. Cuando conoce a Marla (Helena Bonham Carter), otra asistente falsa de grupos de apoyo, su vida parece para volverse un poco más soportable. Sin embargo, cuando se asocia con Tyler (Brad Pitt), se ve arrastrado a un club de lucha clandestino y a un esquema de fabricación de jabón. Juntos, los dos hombres pierden el control y se involucran en una rivalidad competitiva por el amor y el poder. Cuando el narrador está expuesto a la agenda oculta del club de lucha de Tyler, debe aceptar la terrible verdad de que Tyler puede no ser quien dice ser. Escrito por\nRhiannon",
            "actores": [
                "Brad Pitt",
                "Edward Norton",
                "Pastel de carne"
            ],
            "posterurl": "data:image/jpeg;base64,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"
        },
        {
            "título": "Sagan om ringen",
            "año": "2001",
            "géneros": [
                "Aventura",
                "Drama",
                "Fantasía"
            ],
            "puntuaciones": [1, 2, 4, 3, 2, 4, 7, 5, 9, 3, 5, 1, 10, 4, 2, 2, 10, 7, 5, 9, 10, 4, 3 , 5, 8, 3, 2, 5, 5, 4],
            "id": 8,
            "lanzamiento": "2001-12-19",
            "originalTitle": "El Señor de los Anillos: La Comunidad del Anillo",
            "storyline": "Se ha encontrado un antiguo Anillo que se creía perdido durante siglos, y a través de un extraño giro en el destino se le ha dado a un pequeño Hobbit llamado Frodo. Cuando Gandalf descubre que el Anillo es de hecho el Anillo Único del Señor Oscuro Sauron, ¡Frodo debe hacer una búsqueda épica a las Grietas del Destino para destruirlo! Sin embargo, no va solo. Se le unen Gandalf, Legolas el elfo, Gimli el Enano, Aragorn, Boromir y sus tres amigos hobbits, Merry, Pippin y Samwise. A través de montañas, nieve, oscuridad, bosques, ríos y llanuras, enfrentando el mal y el peligro en cada esquina, la Comunidad del Anillo debe ir. ¡Su búsqueda para destruir el Anillo Único es la única esperanza para el final del reinado de los Señores Oscuros! Escrito por\nPaul Twomey <toomsp@hotmail.com>",
            "actores": [
                "Elijah Wood",
                "Ian McKellen",
                "Orlando Bloom"
            ],
            "posterurl": "data:image/jpeg;base64,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"
        },
        {
            "título": "Forrest Gump",
            "año": "1994",
            "géneros": [
                "Comedia",
                "Drama",
                "Romance"
            ],
            "puntuaciones": [9, 1, 10, 10, 10, 6, 3, 7, 1, 3, 4, 9, 2, 4, 10, 8, 7, 4, 8, 8, 9, 5, 4 , 2, 5, 5, 6, 3, 1, 4],
            "id": 9,
            "lanzamiento": "1994-10-14",
            "titulo original": "",
            "storyline": "Forrest Gump es un hombre sencillo con un coeficiente intelectual bajo pero con buenas intenciones. Pasa la infancia con su mejor y única amiga, Jenny. Su 'mamá' le enseña los caminos de la vida y lo deja elegir su destino. Forrest se une al ejército para el servicio en Vietnam, encontrando nuevos amigos llamados Dan y Bubba, gana medallas, crea una famosa flota pesquera de camarones, inspira a la gente a trotar, comienza una locura de ping-pong, crea el emoticón, escribe calcomanías y canciones, dona a la gente y se encuentra con el presidente varias veces. Sin embargo, todo esto es irrelevante para Forrest, quien solo puede pensar en su novia de la infancia, Jenny Curran, quien ha arruinado su vida. Aunque al final lo único que quiere demostrar es que cualquiera puede amar. cualquiera. Escrito por\naliw135",
            "actores": [
                "Tom Hanks",
                "robin wright",
                "Gary Sinise"
            ],
            "posterurl": "data:image/jpeg;base64,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"
        },
        {
            "título": "Sagan om de tv\u00e5 tornen",
            "año": "2002",
            "géneros": [
                "Aventura",
                "Drama",
                "Fantasía"
            ],
            "puntuaciones": [8, 2, 2, 3, 10, 9, 1, 8, 4, 7, 1, 7, 5, 7, 9, 3, 9, 9, 10, 3, 4, 1, 10 , 8, 10, 1, 8, 10, 9, 8],
            "id": 10,
            "lanzamiento": "2002-12-18",
            "originalTitle": "El Señor de los Anillos: Las Dos Torres",
            "storyline": "Mientras Frodo y Sam, ahora acompañados por un nuevo guía, continúan su desesperado viaje hacia la tierra de las sombras para destruir el Anillo Único, cada miembro de la fraternidad rota juega su papel en la batalla contra el malvado mago Saruman y sus ejércitos de Isengard.",
            "actores": [
                "Elijah Wood",
                "Ian McKellen",
                "Viggo Mortensen"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SY256_SX175_AL_.jpg"
        },
        {
            "título": "Matriz",
            "año": "1999",
            "géneros": [
                "Acción",
                "Ciencia ficción"
            ],
            "puntuaciones": [10, 10, 5, 1, 8, 8, 10, 9, 6, 2, 1, 9, 3, 1, 5, 1, 8, 5, 8, 8, 5, 7, 6 , 5, 8, 6, 3, 6, 6, 10],
            "id": 11,
            "lanzamiento": "1999-07-14",
            "originalTitle": "Matrix",
            "storyline": "Thomas A. Anderson es un hombre que vive dos vidas. De día es un programador de computadoras promedio y de noche un hacker conocido como Neo. Neo siempre ha cuestionado su realidad, pero la verdad está mucho más allá de su imaginación. Neo se encuentra en el punto de mira de la policía cuando es contactado por Morpheus, un pirata informático legendario tildado de terrorista por el gobierno.Morpheus despierta a Neo al mundo real, un páramo devastado donde la mayor parte de la humanidad ha sido capturada por una raza de máquinas que viven de del calor corporal y la energía electroquímica de los humanos y que aprisionan sus mentes dentro de una realidad artificial conocida como Matrix. Como rebelde contra las máquinas, Neo debe regresar a Matrix y enfrentarse a los agentes: programas informáticos superpoderosos dedicados a apagar Neo y toda la rebelión humana.Escrito por\nredcommander27",
            "actores": [
                "Keanu Reeves",
                "Laurence Fishburne",
                "Carrie-Anne Moss"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,332 ,500_AL_.jpg"
        },
        {
            "título": "Guds stad",
            "año": "2002",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [1, 2, 5, 10, 1, 2, 6, 10, 2, 9, 7, 9, 7, 9, 4, 8, 7, 7, 7, 7, 10, 9, 9 , 2, 6, 6, 6, 2, 1, 8],
            "id": 12,
            "lanzamiento": "2003-10-17",
            "originalTitle": "Cidade de Deus",
            "storyline": "Brasil, 1960, Ciudad de Dios. El Tender Trio roba moteles y camiones de gasolina. Los niños más pequeños miran y aprenden bien... demasiado bien. 1970: Li'l Z\u00e9 ha prosperado mucho y es dueño de la ciudad Causa violencia y miedo mientras acaba con las bandas rivales sin piedad. Su mejor amigo, Ben\u00e9, es el único que lo mantiene en el lado bueno de la cordura. Rocket ha visto a estos dos ganar poder durante años, y no quiere saber nada. Sin embargo, sigue siendo arrastrado por la locura. Todo lo que quiere hacer es tomar fotografías. Década de 1980: las cosas están fuera de control entre las dos últimas pandillas que quedan... ¿alguna vez terminará? Bienvenido a la Ciudad de Dios. Escrito por\nJeff Mellinger <jeffmellinger@astound.net>",
            "actores": [
                "Alejandro Rodrigues",
                "Matheus Nachtergaele",
                "Leandro Firmino"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX200_CR0,0,200,296_AL_.jpg"
        },
        
        {
            "título": "Livet \u00e4r underbart",
            "año": "1997",
            "géneros": [
                "Comedia",
                "Drama",
                "Guerra"
            ],
            "puntuaciones": [4, 1, 9, 3, 3, 9, 3, 3, 6, 1, 4, 1, 1, 8, 3, 6, 10, 8, 4, 6, 2, 7, 2 , 10, 7, 5, 4, 3, 1, 10],
            "id": 13,
            "lanzamiento": "1999-01-22",
            "originalTitle": "La vida \u00e8 bella",
            "storyline": "En la Italia de la década de 1930, un librero judío despreocupado llamado Guido comienza una vida de cuento de hadas cortejando y casándose con una mujer encantadora de una ciudad cercana. Guido y su esposa tienen un hijo y viven felices juntos hasta la ocupación de Italia por Fuerzas alemanas. En un intento por mantener unida a su familia y ayudar a su hijo a sobrevivir los horrores de un campo de concentración judío, Guido imagina que el Holocausto es un juego y que el gran premio por ganar es un tanque. Escrito por\nAnthony Hughes <husnock31 @hotmail.com>",
            "actores": [
                "Roberto Benigni",
                "Nicoletta Braschi",
                "Giorgio Cantarini"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_SX335_AL_.jpg"
        },
        {
            "título": "R\u00e4dda menige Ryan",
            "año": "1998",
            "géneros": [
                "Drama",
                "Guerra"
            ],
            "puntuaciones": [9, 7, 9, 3, 1, 7, 7, 9, 8, 3, 8, 3, 3, 10, 4, 5, 8, 8, 10, 7, 5, 3, 2 , 5, 6, 5, 9, 6, 10, 6],
            "id": 14,
            "lanzamiento": "1998-10-09",
            "originalTitle": "Salvando al soldado Ryan",
            "argumento": "Iniciando con la invasión aliada de Normandía el 6 de junio de 1944, los miembros del 2.º batallón de guardabosques al mando del capitán Miller luchan en tierra para asegurar una cabeza de playa. En medio de la lucha, dos hermanos mueren en acción. Anteriormente en Nueva Guinea, un tercer hermano es KIA. Su madre, la Sra. Ryan, recibirá los tres telegramas graves el mismo día. El Jefe de Estado Mayor del Ejército de los Estados Unidos, George C. Marshall, tiene la oportunidad de aliviar parte de su dolor. cuando se entera de la existencia de un cuarto hermano, el soldado James Ryan, y decide enviar a 8 hombres (Capitán Miller y miembros selectos del 2.° Rangers) para encontrarlo y llevarlo de vuelta a casa con su madre... Escrito por\nJ.Zelman ",
            "actores": [
                "Tom Hanks",
                "Matt Damon",
                "Tom Sizemore"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,339,500_ AL_.jpg"
        },
        {
            "título": "Interestelar",
            "año": 2014,
            "géneros": [
                "Aventura",
                "Drama",
                "Ciencia ficción"
            ],
            "puntuaciones": [7, 9, 10, 9, 2, 10, 10, 3, 9, 4, 1, 7, 9, 8, 4, 6, 7, 6, 7, 9, 9, 4, 6 , 8, 2, 8, 3, 10, 2, 5],
            "id": 15,
            "lanzamiento": "2014-11-07",
            "titulo original": "",
            "storyline": "El futuro de la Tierra ha estado plagado de desastres, hambrunas y sequías. Solo hay una forma de garantizar la supervivencia de la humanidad: los viajes interestelares. Un agujero de gusano recién descubierto en los confines de nuestro sistema solar permite que un equipo de astronautas viaje donde ningún hombre ha ido antes, un planeta que puede tener el entorno adecuado para sustentar la vida humana",
            "actores": [
                "Matthew McConaughey",
                "Anne Hathaway",
                "Jessica Chastain"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY500_CR0,0,320,500_AL_.jpg"
        },
        {
            "título": "Casablanca",
            "año": "1942",
            "géneros": [
                "Drama",
                "Romance",
                "Guerra"
            ],
            "puntuaciones": [2, 10, 7, 10, 9, 1, 10, 2, 10, 6, 6, 5, 9, 1, 10, 2, 6, 9, 7, 3, 5, 6, 7 , 4, 2, 10, 5, 6, 10, 10],
            "id": 16,
            "lanzamiento": "1943-10-11",
            "titulo original": "",
            "storyline": "En Casablanca durante la Segunda Guerra Mundial, Rick Blaine, un estadounidense exiliado y exluchador por la libertad, dirige el local nocturno más popular de la ciudad. El cínico lobo solitario Blaine se apodera de dos valiosas cartas de tránsito. Cuando llega el comandante nazi Strasser En Casablanca, el adulador Capitán Renault de la policía hace lo que puede para complacerlo, incluida la detención de un líder clandestino checoslovaco, Víctor Laszlo. contra él en París, pero cuando se entera de que ella tenía una buena razón para hacerlo, planean fugarse juntos de nuevo usando las letras de tránsito. Bueno, ese era su plan original... Escrito por\nGary Jackson <garyjack5@cogeco.ca >",
            "actores": [
                "Humphrey Bogart",
                "Ingrid Bergman",
                "Paul Henreid"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY377_SX250_AL_.jpg"
        },
        {
            "título": "Den gr\u00f6na milen",
            "año": "1999",
            "géneros": [
                "Delito",
                "Drama",
                "Fantasía"
            ],
            "puntuaciones": [3, 3, 5, 2, 3, 4, 7, 6, 7, 1, 10, 10, 9, 8, 9, 4, 5, 8, 1, 9, 3, 2, 8 , 8, 6, 9, 7, 10, 4, 2],
            "id": 17,
            "lanzamiento": "2000-02-11",
            "originalTitle": "La Milla Verde",
            "storyline": "Los guardias del corredor de la muerte en una penitenciaría, en la década de 1930, tienen un dilema moral con su trabajo cuando descubren que uno de sus prisioneros, un asesino convicto, tiene un don especial. Escrito por\nGuy Johns",
            "actores": [
                "Tom Hanks",
                "Michael Clarke Duncan",
                "David Morse"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SY370_SX250_AL_.jpg"
        },
        {
            "título": "En ov\u00e4ntad v\u00e4nskap",
            "año": "2011",
            "géneros": [
                "Biografía",
                "Comedia",
                "Drama"
            ],
            "puntuaciones": [4, 6, 6, 10, 2, 7, 7, 3, 6, 7, 4, 10, 7, 4, 2, 4, 5, 4, 1, 9, 4, 3, 9 , 10, 1, 9, 7, 3, 5, 8],
            "id": 18,
            "lanzamiento": "2012-09-21",
            "originalTitle": "Intocables",
            "storyline": "En París, el aristocrático e intelectual Philippe es un millonario tetrapléjico que está entrevistando candidatos para el puesto de su cuidador, con su secretaria pelirroja Magalie. De la nada, el rudo africano Driss corta la fila de candidatos y trae un documento de la Seguridad Social y le pide a Phillipe que lo firme para demostrar que está buscando un puesto de trabajo para poder recibir su prestación por desempleo. Philippe desafía a Driss, ofreciéndole un período de prueba de un mes para ganar experiencia ayudándolo. Entonces Driss puede decidir si quiere quedarse con él o no. Driss acepta el desafío y se muda a la mansión, cambiando la aburrida vida de Phillipe y sus empleados. Escrito por\nClaudio Carvalho, Río de Janeiro, Brasil",
            "actores": [
                "Fran\u00e7ois Cluzet",
                "Omar Si",
                "Anne Le Ny"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        {
            "título": "Eldflugornas grav",
            "año": "1988",
            "géneros": [
                "Animación",
                "Drama",
                "Guerra"
            ],
            "puntuaciones": [7, 1, 5, 7, 3, 2, 8, 9, 2, 1, 8, 1, 9, 8, 8, 8, 5, 2, 1, 2, 4, 10, 3 , 10, 9, 2, 4, 10, 5, 4],
            "id": 19,
            "lanzamiento": "1988-04-16",
            "originalTitle": "Hotaru no haka",
            "storyline": "La historia de Seita y Satsuko, dos jóvenes hermanos japoneses, que viven en los últimos días de la Segunda Guerra Mundial. Cuando un bombardeo estadounidense separa a los dos niños de sus padres, los dos hermanos deben confiar completamente el uno en el otro mientras luchar para luchar por su supervivencia. Escrito por\nKyle Perez",
            "actores": [
                "Tsutomu Tatsumi",
                "Ayano Shiraishi",
                "Akemi Yamaguchi"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjEwNDVhZjMtYzA1MS00ZWUxLThjOGUtZTliNGZiNGYyMjA3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,353,50 0_AL_.jpg"
        },
        {
            "título": "\u00c4rans v\u00e4g",
            "año": "1957",
            "géneros": [
                "Drama",
                "Guerra"
            ],
            "puntuaciones": [5, 10, 5, 7, 6, 8, 7, 7, 4, 9, 8, 6, 8, 9, 9, 4, 7, 10, 7, 10, 10, 3, 10 , 2, 6, 10, 9, 4, 10, 8],
            "id": 20,
            "lanzamiento": "1958-05-08",
            "originalTitle": "Senderos de Gloria",
            "storyline": "La inutilidad y la ironía de la guerra en las trincheras en la Primera Guerra Mundial se muestra cuando un comandante de unidad en el ejército francés debe lidiar con el motín de sus hombres y un general que busca la gloria después de que parte de su fuerza cae bajo fuego en un ataque imposible. Escrito por\nKeith Loh <loh@sfu.ca>",
            "actores": [
                "Kirk Douglas",
                "Ralph Meeker",
                "Adolfo Menjou"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,326, 500_AL_.jpg"
        },
        {
            "título": "Django desencadenado",
            "año":2012,
            "géneros": [
                "Drama",
                "Occidental"
            ],
            "puntuaciones": [8, 4, 8, 6, 9, 10, 10, 6, 2, 8, 2, 10, 9, 7, 6, 5, 9, 5, 2, 9, 3, 9, 6 , 1, 1, 7, 4, 2, 10, 10],
            "id": 21,
            "lanzamiento": "2013-01-18",
            "titulo original": "",
            "argumento": "Un dentista alemán compra la libertad de un esclavo y lo entrena con la intención de convertirlo en su cazarrecompensas adjunto. En cambio, lo llevan al sitio de la esposa del esclavo que pertenece al despiadado propietario de una plantación. Escrito por \nBenLobel",
            "actores": [
                "Jamie Foxx",
                "Christoph Vals",
                "Leonardo Di Caprio"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        {
            "título": "El Resplandor",
            "año": "1980",
            "géneros": [
                "Drama",
                "Horror"
            ],
            "puntuaciones": [1, 6, 8, 4, 6, 4, 8, 2, 7, 4, 5, 9, 9, 1, 10, 3, 2, 4, 8, 2, 9, 8, 3 , 9, 10, 3, 7, 5, 5, 9],
            "id": 22,
            "lanzamiento": "1980-09-26",
            "titulo original": "",
            "storyline": "Al firmar un contrato, Jack Torrance, un escritor normal y ex maestro, acepta hacerse cargo de un hotel que tiene un pasado largo y violento que pone a todos en el hotel en una situación nerviosa. Mientras que Jack se vuelve cada vez más violento y enojado por su vida, su hijo, Danny, intenta usar un talento especial, el \"Resplandor\", para informar a la gente de afuera sobre lo que está pasando en el hotel. Escrito por\nJ. S. Golden",
            "actores": [
                "Jack Nicholson",
                "Shelley Duvall",
                "Danny Lloyd"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY476_CR0,0,313,4 76_AL_.jpg"
        },
        {
            "título": "La La Land",
            "año": "2016",
            "géneros": [
                "Comedia",
                "Drama",
                "Musical"
            ],
            "puntuaciones": [1, 1, 4, 8, 9, 5, 9, 8, 2, 3, 3, 10, 2, 6, 9, 1, 5, 9, 7, 9, 1, 5, 1 , 9, 5, 2, 2, 3, 1, 1],
            "id": 23,
            "lanzamiento": "2017-01-27",
            "titulo original": "",
            "argumento": "Mia, una aspirante a actriz, sirve café con leche a las estrellas de cine entre audiciones y Sebastian, un músico de jazz, se las arregla tocando en cócteles en bares lúgubres, pero a medida que aumenta el éxito, se enfrentan a decisiones que comienzan a deshilachar el el frágil tejido de su historia de amor, y los sueños que tanto trabajaron para mantener el uno en el otro amenazan con desgarrarlos. Escrito por\nEirini",
            "actores": [
                "Ryan Gosling",
                "Emma Stone",
                "Rosemarie DeWitt"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        {
            "title": "Réquiem por un sueño",
            "año": "2000",
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [7, 4, 5, 7, 5, 10, 9, 8, 6, 10, 9, 2, 4, 6, 3, 5, 5, 1, 3, 3, 7, 10, 5 , 2, 3, 2, 4, 8, 5, 7],
            "id": 24,
            "lanzamiento": "2001-09-14",
            "titulo original": "",
            "storyline": "Sara Goldfarb (Ellen Burstyn) es una viuda jubilada que vive en un apartamento pequeño. Pasa la mayor parte de su tiempo viendo televisión, especialmente un programa de autoayuda en particular. Tiene delirios de superar su aburrida existencia actual ser un invitado en ese programa. Su hijo, Harry (Jared Leto) es un adicto, pero junto con su amigo Tyrone (Marlon Wayans) tiene visiones de triunfar convirtiéndose en traficante de drogas. La novia de Harry, Marion (Jennifer Connelly), podría ser moda diseñadora o artista, pero se ve arrastrada por el mundo centrado en las drogas de Harry. Mientras tanto, Sara ha desarrollado su propia adicción. Quiere perder peso desesperadamente, por lo que se embarca en un curso acelerado de píldoras, píldoras que resultan ser muy adictivas y perjudicial para su estado mental. Escrito por\ngrantss",
            "actores": [
                "Ellen Burstyn",
                "Jared Leto",
                "Jennifer Connelly"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,50 0_AL_.jpg"
        },
        {
            "título": "La naranja mecánica",
            "año": "1971",
            "géneros": [
                "Delito",
                "Drama",
                "Ciencia ficción"
            ],
            "puntuaciones": [4, 7, 2, 6, 4, 3, 8, 3, 8, 5, 2, 10, 10, 6, 6, 10, 6, 2, 7, 1, 5, 7, 4 , 10, 9, 8, 8, 4, 5, 10],
            "id": 25,
            "lanzamiento": "26-04-1972",
            "originalTitle": "La naranja mecánica",
            "storyline": "El protagonista Alex DeLarge es un joven \"ultraviolento\" en la Gran Bretaña futurista. Como con toda suerte, finalmente se le acaba y es arrestado y condenado por asesinato y violación. Mientras está en prisión, Alex se entera de un programa experimental en qué convictos están programados para detestar la violencia. Si pasa por el programa, su sentencia se reducirá y volverá a las calles antes de lo esperado. Pero las pruebas de Alex están lejos de terminar una vez que llega a las calles de Gran Bretaña que había tenido. una mano en la creación. Escrito por\nNikki Carlyle",
            "actores": [
                "Malcom McDowell",
                "Patrick Magee",
                "Michael Bates"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        {
            "título": "Lawrence av Arabien",
            "año": "1962",
            "géneros": [
                "Aventura",
                "Biografía",
                "Drama"
            ],
            "puntuaciones": [3, 4, 2, 5, 5, 8, 6, 9, 6, 1, 5, 5, 1, 5, 8, 8, 1, 4, 7, 9, 5, 10, 6 , 6, 10, 4, 3, 8, 5, 6],
            "id": 26,
            "lanzamiento": "1963-03-22",
            "originalTitle": "Lorenzo de Arabia",
            "argumento": "Debido a su conocimiento de las tribus beduinas nativas, el teniente británico TE Lawrence es enviado a Arabia para encontrar al Príncipe Faisal y servir como enlace entre los árabes y los británicos en su lucha contra los turcos. Con la ayuda de nativos Sherif Ali, Lawrence se rebela contra las órdenes de su oficial superior y emprende un audaz viaje en camello por el duro desierto para atacar un puerto turco bien protegido. Escrito por\nJwelch5742",
            "actores": [
                "Peter O'Toole",
                "Alec Guiness",
                "Anthony Quinn"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY500_CR0,0,346 ,500_AL_.jpg"
        },
        {
            "title": "Eterno resplandor de una mente sin recuerdos",
            "año": "2004",
            "géneros": [
                "Drama",
                "Romance",
                "Ciencia ficción"
            ],
            "puntuaciones": [2, 2, 2, 4, 1, 1, 3, 7, 1, 2, 5, 1, 5, 3, 3, 1, 3, 8, 2, 10, 10, 9, 4 , 3, 5, 9, 1, 2, 10, 3],
            "id": 27,
            "lanzamiento": "2004-08-20",
            "titulo original": "",
            "storyline": "Un hombre, Joel Barish, con el corazón roto porque su novia Clementine se sometió a un procedimiento para borrarlo de su memoria, decide hacer lo mismo. Sin embargo, mientras ve cómo se desvanecen sus recuerdos de ella, se da cuenta de que todavía ama ella, y puede ser demasiado tarde para corregir su error. Escrito por\nanónimo",
            "actores": [
                "Jim Carrey",
                "Kate Winslet",
                "Tom Wilkinson"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        
        {
            "título": "Amadeus",
            "año": "1984",
            "géneros": [
                "Biografía",
                "Drama",
                "Historia"
            ],
            "puntuaciones": [1, 2, 7, 7, 3, 6, 1, 1, 9, 10, 1, 4, 8, 8, 9, 8, 1, 6, 8, 5, 5, 5, 10 , 5, 5, 8, 8, 3, 3, 4],
            "id": 28,
            "lanzamiento": "1984-10-12",
            "titulo original": "",
            "storyline": "Antonio Salieri cree que la música de Wolfgang Amadeus Mozart es divina y milagrosa. Él desearía ser tan buen músico como Mozart para poder alabar al Señor a través de la composición. Comenzó su carrera como un hombre devoto que cree que su el éxito y el talento como compositor son las recompensas de Dios por su piedad. También está contento como el respetado compositor de la corte del emperador austríaco José II, económicamente acomodado. Pero se sorprende al saber que Mozart es una criatura tan vulgar y no puede entender por qué Dios favoreció a Mozart para que fuera su instrumento. La envidia de Salieri lo ha convertido en enemigo de Dios cuya grandeza era evidente en Mozart. Él está listo para vengarse de Dios y de Mozart por su propia mediocridad musical. Escrito por\nKhaled Salem",
            "actores": [
                "F. Murray Abraham",
                "Tom Hulce",
                "Elizabeth Berridge"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5NDkwMTk5N15BMl5BanBnXkFtZTYwODg3MDk2._V1_SY352_CR0,0,237,352_AL_.jpg"
        },
        {
            "título": "Toy Story 3",
            "año": "2010",
            "géneros": [
                "Animación",
                "Aventura",
                "Comedia"
            ],
            "puntuaciones": [10, 5, 5, 1, 10, 10, 8, 3, 4, 6, 7, 4, 5, 7, 10, 2, 9, 2, 4, 7, 1, 1, 3 , 9, 3, 3, 2, 5, 1, 5],
            "id": 29,
            "lanzamiento": "2010-08-27",
            "titulo original": "",
            "storyline": "Woody, Buzz y toda la pandilla están de regreso. Mientras su dueño, Andy, se prepara para irse a la universidad, sus juguetes leales se encuentran en una guardería donde los niños indómitos con sus pequeños dedos pegajosos no juegan bien. Entonces, es todo por uno para todos mientras se unen a la contraparte de Barbie, Ken, un erizo actor llamado Mr. Pricklepants y un oso de peluche rosa con aroma a fresa llamado Lots-o'-Huggin' Bear para planear su gran escape. Escrito por\nWalt Disney Studios" ,
            "actores": [
                "Tom Hanks",
                "Tim Allen",
                "Joan Cusack"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SY500_CR0,0,353,500_AL_.jpg"
        },
        {
            "título": "Chaqueta metálica completa",
            "año": "1987",
            "géneros": [
                "Drama",
                "Guerra"
            ],
            "puntuaciones": [9, 9, 7, 1, 4, 9, 3, 6, 3, 3, 7, 8, 5, 10, 7, 3, 2, 5, 6, 2, 8, 7, 7 , 5, 10, 7, 10, 3, 3, 2],
            "id": 30,
            "lanzamiento": "1987-10-02",
            "titulo original": "",
            "argumento": "Una mirada de dos segmentos al efecto de la mentalidad militar y la guerra misma en los marines de la era de Vietnam. La primera mitad sigue a un grupo de reclutas en un campo de entrenamiento bajo el mando del sargento de artillería Hartman. La segunda mitad muestra uno de esos reclutas, Joker, cubriendo la guerra como corresponsal de Stars and Stripes, centrándose en la ofensiva Tet. Escrito por\nScott Renshaw <as.idc@forsythe.stanford.edu>",
            "actores": [
                "Mateo Modine",
                "R. Lee Ermey",
                "Vicent D'Onofrio"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,328,5 00_AL_.jpg"
        },
        {
            "título": "Dangal",
            "año": "2016",
            "géneros": [
                "Acción",
                "Biografía",
                "Drama"
            ],
            "puntuaciones": [3, 9, 6, 8, 2, 4, 5, 1, 9, 6, 1, 3, 2, 1, 10, 4, 4, 2, 5, 9, 6, 5, 10 , 8, 8, 1, 7, 10, 9, 1],
            "id": "PT161M",
            "lanzamiento": "2016-12-23",
            "titulo original": "",
            "argumento": "Película biográfica de Mahavir Singh Phogat, quien enseñó lucha libre a sus hijas Babita Kumari y Geeta Phogat. Geeta Phogat fue la primera luchadora de la India en ganar en los Juegos de la Commonwealth de 2010, donde ganó la medalla de oro (55 kg) mientras su la hermana Babita Kumari ganó la plata (52 kg). Escrito por\nDibyayan_Chakravorty",
            "actores": [
                "Aamir Khan",
                "Sakshi Tanwar",
                "Fátima Sana Shaikh"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg"
        },
        {
            "título": "\u00c5r 2001 - Ett rymd\u00e4ventyr",
            "año": "1968",
            "géneros": [
                "Aventura",
                "Ciencia ficción"
            ],
            "puntuaciones": [8, 5, 10, 2, 8, 1, 1, 1, 2, 3, 5, 2, 5, 2, 5, 7, 7, 1, 6, 4, 9, 4, 9 , 1, 3, 4, 4, 5, 9, 9],
            "id": 31,
            "lanzamiento": "27-08-1968",
            "originalTitle": "2001: Una odisea del espacio",
            "storyline": "\"2001\" es una historia de evolución. En algún momento del pasado lejano, alguien o algo empujó la evolución al colocar un monolito en la Tierra (presumiblemente también en otras partes del universo). La evolución permitió entonces a la humanidad llegar a la superficie de la luna, donde se encuentra otro monolito, uno que indica a los placeres de monolitos que la humanidad ha evolucionado tanto. Ahora comienza una carrera entre computadoras (HAL) y humanos (Bowman) para llegar a los placeres de monolitos. El ganador logrará el siguiente paso. en evolución, sea lo que sea. Escrito por\nLarry Cousins",
            "actores": [
                "Keir Dullea",
                "Gary Lockwood",
                "Guillermo Silvestre"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTZkZTBhYmUtMTIzNy00YTViLTg1OWItNGUwMmVlN2FjZTVkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,337,500_AL_ .jpg"
        },
        {
            "título": "Babam ve Oglum",
            "año": "2005",
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [8, 3, 4, 8, 4, 3, 2, 7, 1, 4, 1, 10, 2, 3, 8, 2, 2, 1, 8, 10, 3, 5, 9 , 2, 5, 1, 1, 7, 7, 7],
            "id": 32,
            "lanzamiento": "2005-11-18",
            "titulo original": "",
            "storyline": "Sadik es uno de los jóvenes rebeldes que ha sido políticamente activo como estudiante universitario y se convirtió en periodista de izquierda en los años 70, a pesar de las expectativas de su padre de que se convirtiera en ingeniero agrónomo y tomara el control de la granja familiar en un pueblo del Egeo. En la madrugada del 12 de septiembre de 1980, cuando un golpe militar despiadado golpea el país, no pueden encontrar acceso a ningún hospital o un médico y su esposa muere mientras da a luz a su único hijo, Deniz. Después de una larga Después de un largo período de tortura, juicios y tiempo en la cárcel, Sadik regresa a su pueblo con Deniz, de 7 u 8 años, sabiendo que será difícil corregir las cosas con su padre, Huseyin. Escrito por\nAli Riza Bolukbasi",
            "actores": [
                "Fikret Kuskan",
                "\u00c7etin Tekindor",
                "H\u00fcmeyra"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjAzMzEwYzctNjc1MC00Nzg5LWFmMGItMTgzYmMyNTY2OTQ4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_SX347_AL_.jpg"
        },
       
        {
            "título": "Historia del juguete",
            "año": "1995",
            "géneros": [
                "Animación",
                "Aventura",
                "Comedia"
            ],
            "puntuaciones": [10, 8, 5, 3, 4, 2, 8, 3, 3, 7, 3, 9, 5, 7, 5, 5, 8, 7, 1, 3, 4, 3, 4 , 10, 9, 1, 4, 2, 1, 1],
            "id": 33,
            "lanzamiento": "1996-03-08",
            "titulo original": "",
            "storyline": "A un niño pequeño llamado Andy le encanta estar en su habitación, jugar con sus juguetes, especialmente con su muñeco llamado \"Woody\". Pero, ¿qué hacen los juguetes cuando Andy no está con ellos? Cobran vida. Woody cree que tiene la vida (como un juguete) bien. Sin embargo, debe preocuparse por la mudanza de la familia de Andy, y lo que Woody no sabe es sobre la fiesta de cumpleaños de Andy. Woody no se da cuenta de que la madre de Andy le regaló una figura de acción conocida como Buzz Lightyear, que no cree que sea un juguete, se convierte rápidamente en el nuevo juguete favorito de Andy. Woody, que ahora está consumido por los celos, intenta deshacerse de Buzz. Entonces, tanto Woody como Buzz están perdidos. Deben encontrar una forma de volver a Andy antes de que se mude sin ellos, pero tendrán que pasar por un despiadado asesino de juguetes, Sid Phillips.Escrito por\nJohn Wiggins",
            "actores": [
                "Tom Hanks",
                "Tim Allen",
                "Don Rickles"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SY500_SX335_AL_.jpg"
        },
        {
            "título": "F\u00f6r n\u00e5gra f\u00e5 dollar mer",
            "año": "1965",
            "géneros": [
                "Occidental"
            ],
            "puntuaciones": [8, 9, 9, 5, 2, 4, 3, 6, 7, 1, 3, 9, 5, 2, 6, 5, 5, 8, 2, 2, 3, 7, 10 , 6, 10, 5, 4, 8, 6, 10],
            "id": 34,
            "lanzamiento": "1966-11-17",
            "originalTitle": "Por qualche dollaro en pi\u00f9",
            "storyline": "Monco es un asesino a sueldo que persigue a El Indio y su pandilla. Durante su cacería, conoce al Coronel Douglas Mortimer, otro asesino a sueldo, y deciden asociarse, perseguir a los malos juntos y dividir la recompensa. Durante su empresa, habrá muchas balas y situaciones divertidas. Al final, uno de los cazarrecompensas muestra la verdadera intención de su caza. Escrito por\nClaudio Carvalho, Río de Janeiro, Brasil",
            "actores": [
                "Clint Eastwood",
                "Lee Van Cleef",
                "Gian María Volont\u00e8"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzMjIzOTEzMF5BMl5BanBnXkFtZTcwMTUzNTk3NA@@._V1_SY500_CR0,0,333,500_AL_.jpg"
        },
        {
            "título": "Caracortada",
            "año": "1983",
            "géneros": [
                "Delito",
                "Drama"
            ],
            "puntuaciones": [7, 5, 1, 10, 9, 1, 8, 10, 10, 3, 9, 3, 6, 9, 1, 4, 8, 5, 5, 4, 5, 7, 4 , 8, 5, 6, 5, 6, 6, 3],
            "id": 35,
            "lanzamiento": "1984-03-23",
            "titulo original": "",
            "storyline": "Tony Montana logra salir de Cuba durante el éxodo del Mariel de 1980. Se encuentra en un campo de refugiados de Florida, pero su amigo Manny tiene una salida para ellos: emprender un asesinato a sueldo y se harán los arreglos para conseguir un verde Pronto estará trabajando para el narcotraficante Frank López y muestra su valor cuando un trato con narcotraficantes colombianos sale mal. También trae un nuevo nivel de violencia a Miami. Tony protege a su hermana menor, pero su madre sabe lo que él hace por ella. Sin embargo, Tony está impaciente y lo quiere todo, incluido el imperio de Frank y su amante Elvira Hancock. Sin embargo, una vez en la cima, las escandalosas acciones de Tony lo convierten en un objetivo y todo se desmorona. Escrito por\ngarykmcd",
            "actores": [
                "Al Pacino",
                "Michelle Pfeiffer",
                "Steven Bauer"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        {
            "título": "Jakten",
            "año": 2012,
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [6, 2, 4, 1, 10, 5, 2, 9, 10, 4, 9, 8, 4, 4, 5, 7, 3, 7, 10, 6, 9, 7, 6 , 1, 1, 8, 6, 3, 7, 7],
            "id": 36,
            "lanzamiento": "2013-04-12",
            "originalTitle": "Jagten",
            "storyline": "Lucas es un maestro de jardín de infantes que cuida mucho a sus alumnos. Desafortunadamente para él, la joven Klara tiene una imaginación desbocada e inventa una mentira sobre su maestro. Antes de que Lucas sea capaz de comprender las consecuencias, tiene convertirse en el marginado de la ciudad. La búsqueda está en marcha para demostrar su inocencia antes de que se lo quiten para siempre. Escrito por\nnapierslogs",
            "actores": [
                "Mads Mikkelsen",
                "Thomas Bo Larsen",
                "Annika Wedderkopp"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SY500_CR0,0,349,500_AL_.jpg"
        },
        {
            "título": "Will Hunting",
            "año": "1997",
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [3, 5, 8, 9, 9, 9, 10, 4, 4, 3, 9, 3, 9, 8, 1, 9, 6, 4, 9, 10, 9, 7, 7 , 6, 2, 10, 10, 1, 4, 4],
            "id": 37,
            "lanzamiento": "1998-03-13",
            "originalTitle": "Buena voluntad de caza",
            "storyline": "Una historia conmovedora de un joven descarriado que lucha por encontrar su identidad, viviendo en un mundo donde puede resolver cualquier problema, excepto el que se está gestando en lo más profundo de sí mismo, hasta que un día conoce a su alma gemela que abre su mente y su corazón. Escrito por\nDima & Danielle",
            "actores": [
                "robin williams",
                "Matt Damon",
                "Ben Affleck"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,327,50 0_AL_.jpg"
        },
        {
            "título": "Nader och Simin - En separación",
            "año": "2011",
            "géneros": [
                "Drama",
                "Misterio"
            ],
            "puntuaciones": [10, 3, 5, 7, 8, 3, 5, 7, 5, 8, 6, 10, 2, 10, 4, 1, 5, 6, 4, 5, 2, 4, 1 , 2, 9, 3, 3, 8, 4, 6],
            "id": 38,
            "lanzamiento": "2011-09-30",
            "originalTitle": "Jodaeiye Nader az Simin",
            "storyline": "Nader (Peyman Moaadi) y Simin (Leila Hatami) discuten sobre vivir en el extranjero. Simin prefiere vivir en el extranjero para brindarle mejores oportunidades a su única hija, Termeh. Sin embargo, Nader se niega a ir porque cree que debe quedarse en Irán y cuidar de su padre (Ali-Asghar Shahbazi), que sufre de Alzheimer. Sin embargo, Simin está decidida a divorciarse y dejar el país con su hija. Escrito por\nAmin Davoodi",
            "actores": [
                "Peyman Moadi",
                "Leila Hatami",
                "Sare Bayat"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzMzU4NDUwOF5BMl5BanBnXkFtZTcwMTM5MjA5Ng@@._V1_SY500_CR0,0,337,500_AL_.jpg"
        },
        {
            "título": "Indiana Jones y su hermana korst\u00e5get",
            "año": "1989",
            "géneros": [
                "Acción",
                "Aventura",
                "Fantasía"
            ],
            "puntuaciones": [1, 1, 4, 9, 1, 6, 7, 9, 5, 4, 8, 4, 4, 6, 9, 7, 5, 8, 6, 3, 9, 3, 1 , 4, 9, 3, 6, 6, 5, 1],
            "id": 39,
            "lanzamiento": "1989-09-15",
            "originalTitle": "Indiana Jones y la última cruzada",
            "storyline": "Un coleccionista de arte le pide a Jones que se embarque en la búsqueda del Santo Grial. Se entera de que otro arqueólogo ha desaparecido mientras buscaba el preciado cáliz, y el hombre desaparecido es su propio padre, el Dr. Henry Jones. El El artefacto es mucho más difícil de encontrar de lo que esperaban, y sus poderes son demasiado para aquellos de corazón impuro. Escrito por\nJwelch5742",
            "actores": [
                "Harrison Ford",
                "Sean Connery",
                "Alison Doody"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_CR0,0,339,500 _AL_.jpg"
        },
        {
            "título": "Allt om Eva",
            "año": "1950",
            "géneros": [
                "Drama"
            ],
            "puntuaciones": [9, 7, 2, 5, 8, 2, 8, 4, 2, 5, 4, 10, 6, 7, 2, 4, 3, 2, 5, 2, 4, 2, 8 , 9, 10, 2, 4, 3, 5, 3],
            "id": 40,
            "lanzamiento": "1951-01-15",
            "originalTitle": "Todo sobre Eva",
            "storyline": "Eve (Anne Baxter) está esperando entre bastidores para conocer a su \"ídolo\" envejecida, la estrella de Broadway, Margo Channing (Bette Davis). Todo parece bastante inocente cuando Eve explica que ha visto a Margo en CADA actuación de la la obra actual en la que se encuentra. Solo el crítico de Playright DeWitt (George Sanders) ve a través del malvado plan de Eve, que consiste en tomar sus papeles y su novio, Bill Simpson (Gary Merrill). Cuando el novio no muestra ningún interés, ella intenta convertirse en dramaturga. Hugh Marlowe (Lloyd Richards), pero DeWitt la detiene. Después de aceptar su premio, decide saltarse la fiesta posterior y se va a su habitación, donde encontramos a una joven llamada Phoebe, que se coló en su habitación y se quedó dormida. es donde el \"Círculo de la vida\" ahora llega a buen término, ya que Eve va a ser interpretada de la misma manera que lo hizo con Margo",
            "actores": [
                "Bette Davis",
                "Anne Baxter",
                "George Sanders"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_SY500_CR0,0,333,500_AL_.jpg"
        },
        {
            "título": "Yojimbo (Livvakten)",
            "año": "1961",
            "géneros": [
                "Acción",
                "Drama",
                "Suspenso"
            ],
            "puntuaciones": [10, 9, 8, 9, 9, 1, 1, 2, 6, 4, 8, 2, 2, 9, 7, 10, 2, 7, 3, 5, 9, 3, 8 , 6, 6, 3, 2, 10, 1, 3],
            "id": 41,
            "lanzamiento": "1964-10-28",
            "título original": "Y\u00f4jinb\u00f4",
            "storyline": "Sanjuro, un samurái errante entra en un pueblo rural en el Japón del siglo XIX. Después de enterarse por el posadero de que el pueblo está dividido entre dos gánsteres, enfrenta a uno contra el otro. Sus esfuerzos se ven complicados por la llegada de el astuto Unosuke, el hijo de uno de los gánsteres, que posee un revólver. Unosuke hace que golpeen a Sanjuro después de que reúne a una mujer secuestrada con su esposo e hijo, y luego masacra a los oponentes de su padre. Durante la matanza, el samurái escapa con la ayuda de el posadero; pero mientras se recupera en un templo cercano, se entera del secuestro del posadero por Unosuke, y regresa a la ciudad para enfrentarse a él. Escrito por\nBernard Keane <BKeane2@email.dot.gov.au>",
            "actores": [
                "Toshir\u00f4 Mifune",
                "Eijir\u00f4 T\u00f4no",
                "Tatsuya Nakadai"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZThiZjAzZjgtNDU3MC00YThhLThjYWUtZGRkYjc2ZWZlOTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY500_CR0,0,332,50 0_AL_.jpg"
        },
        {
            "título": "Batman comienza",
            "año": "2005",
            "géneros": [
                "Acción",
                "Aventura"
            ],
            "puntuaciones": [2, 5, 2, 8, 1, 2, 9, 5, 10, 3, 7, 7, 7, 4, 8, 2, 10, 6, 6, 3, 7, 8, 3 , 7, 10, 5, 8, 2, 9, 4],
            "id": 42,
            "lanzamiento": "2005-07-27",
            "titulo original": "",
            "storyline": "Cuando sus padres son asesinados, el playboy multimillonario Bruce Wayne se muda a Asia, donde Henri Ducard y Ra's Al Ghul lo asesoran sobre cómo luchar contra el mal. Al enterarse del plan para acabar con el mal en Gotham City por Ducard, Bruce evita que este plan avance más y regresa a su casa. De vuelta en su entorno original, Bruce adopta la imagen de un murciélago para infundir miedo a los criminales y corruptos como el ícono conocido como 'Batman'. No me quedaré callado por mucho tiempo. Escrito por\nkonstantinwe",
            "actores": [
                "Christian Bale",
                "Michael Caine",
                "Ken Watanabe"
            ],
            "posterurl": "data:image/jpeg;base64,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"
        },
        {
            "título": "Arriba",
            "año": "2009",
            "géneros": [
                "Animación",
                "Aventura",
                "Comedia"
            ],
            "puntuaciones": [4, 1, 7, 1, 5, 7, 9, 9, 10, 2, 9, 7, 10, 9, 7, 2, 6, 1, 6, 6, 1, 2, 3 , 5, 2, 7, 5, 10, 7, 5],
            "id": 43,
            "lanzamiento": "2009-10-16",
            "originalTitle": "Arriba",
            "storyline": "Carl Fredricksen cuando era niño quería explorar América del Sur y encontrar las Cataratas del Paraíso prohibidas. Aproximadamente 64 años después, comienza su viaje junto con un Boy Scout llamado Russel con la ayuda de 500 globos. En su viaje descubren muchos nuevos amigos, incluido un perro que habla y Carl y Russel descubren que alguien tiene planes malvados. Carl pronto se da cuenta de que este malhechor es su ídolo de la infancia. ¿Serán capaces de derrotarlo y encontrarán Paradise Falls?",
            "actores": [
                "Eduardo Asner",
                "Jordan Nagai",
                "John Ratzenberger"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SY500_CR0,0,332,500_AL_.jpg"
        },
        {
            "título": "Pruebo el laget",
            "año": "1959",
            "géneros": [
                "Comedia",
                "Romance"
            ],
            "puntuaciones": [5, 5, 7, 5, 2, 7, 2, 8, 4, 6, 2, 1, 4, 5, 2, 8, 2, 1, 1, 8, 5, 8, 9 , 8, 4, 4, 10, 7, 6, 2],
            "id": 44,
            "lanzamiento": "28-09-1959",
            "originalTitle": "A algunos les gusta lo caliente",
            "storyline": "Cuando dos músicos de Chicago, Joe y Jerry, son testigos de la masacre del Día de San Valentín, quieren salir de la ciudad y alejarse del gángster responsable, Spats Colombo. Están desesperados por conseguir un concierto de la ciudad, pero el único trabajo que conocen es en una banda de chicas que se dirige a Florida. Aparecen en la estación de tren como Josephine y Daphne, las bajistas y saxofonistas de reemplazo. Sin duda, disfrutan estar cerca de las chicas, especialmente de Sugar Kane. Kowalczyk, que canta y toca el ukelele. Joe, en particular, se propone cortejarla, mientras que Jerry/Daphne es cortejada por un millonario, Osgood Fielding III. Se produce caos cuando los dos hombres intentan mantener ocultas sus verdaderas identidades y Spats Colombo y su equipo muestran para una reunión con varios otros señores del crimen. Escrito por\ngarykmcd",
            "actores": [
                "Marilyn Monroe",
                "Tony Curtis",
                "Jack Lemmon"
            ],
            "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,322,500_AL_ .jpg"
        }
        
        
    ];
   
    render(){
        return (
            <>  
                <ListaPeliculas peliculas={this.peliculas}/>
                
          </>
            )

    }

}