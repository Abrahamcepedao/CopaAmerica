import React from 'react';

const QuinielaRules = () => {
    return (
        <div className="p-8 rounded-lg text-justify">
            <h1 className="text-3xl font-bold text-white mb-4 text-center">Reglas de Quiniela Copa América 2024</h1>
            <div className="space-y-6 text-white">
                <section>
                    <h2 className="text-2xl font-semibold">INSTRUCCIONES</h2>
                    <p>
                        Al iniciar sesión se solicitará realizar el pago de un monto de $500.00 para participar en la quiniela Copa América 2024.
                        Una vez recibido el pago se dará acceso al participante a la plataforma.
                    </p>
                    <p>
                        Para seleccionar el equipo ganador se deberá seleccionar la bandera del equipo quien crea ganador. Una vez seleccionada aparecerá un recuadro alrededor de la bandera, especificando la opción elegida.
                    </p>
                    <p>
                        Seguido se colocará el resultado predecido entre ambas banderas. Para colocar el resultado se deberá elegir utilizando las flechas arriba (agregar gol), abajo (descontar gol).
                    </p>
                    <p>
                        Esto se repetirá para cada partido de las eliminatorias de cuartos de final.
                        A partir de semifinal, tercer lugar y final, únicamente se deberá seleccionar la bandera de la selección que se piense ganadora.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">FECHA LÍMITE DE INSCRIPCIÓN</h2>
                    <p>Jueves 4 de julio del 2024 a las 7:00pm (CDMX).</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">COSTO DE INSCRIPCIÓN</h2>
                    <p>El costo de inscripción es de $500.00 pesos.</p>
                    <p>Una vez realizado el pago no se podrá devolver. Por lo tanto, es sumamente importante que registre su quiniela antes de la fecha límite.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">FORMA DE PAGO</h2>
                    <p><strong>Efectivo</strong></p>
                    <p>Pago en efectivo a Gabriel Gutierrez Castillo (999 997 2751)</p>
                    <p><strong>Transferencia</strong></p>
                    <p>CLABE: 002910701710520076</p>
                    <p>Banco: Banamex</p>
                    <p>Titular: Gabriel Gutierrez Castillo</p>
                    <p>Concepto: Quiniela Euro- tu teléfono</p>
                    <p>Enviar el comprobante a Gabriel Gutiérrez Castillo (999 997 2751) o Abraham Cepeda Oseguera (999 365 4620)</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">PREMIOS</h2>
                    <p>Los premios serán calculados con base en los siguientes porcentajes:</p>
                    <ul className="list-disc ml-5 space-y-2">
                        <li>1er Lugar: 45%</li>
                        <li>2º Lugar: 27%</li>
                        <li>3er Lugar: 18%</li>
                        <li>Organizadores: 10%</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">SISTEMA DE PUNTOS</h2>
                    <ul className="list-disc ml-5 space-y-2">
                        <li>Al acertar al ganador de cuartos de final se obtendra 1 punto.</li>
                        <li>Si se acierta el resultado de un solo equipo se obtendrán 2 puntos adicionales.</li>
                        <li>Si se acierta el marcador exacto, se conseguirán 5 puntos adicionales.</li>
                    </ul>
                    <p className='mt-2'><strong>Ejemplo (Cuartos de Final):</strong></p>
                    <p>Partido entre Colombia vs Brasil</p>
                    <p>El participante coloca como ganador a Colombia con un resultado de 2-1 a favor de la selección colombiana. El partido queda en 2-0.</p>
                    <p>Se obtendrán 1 punto por acierto a la selección ganadora. Adicional 2 puntos por acertar la cantidad de goles por parte de Colombia.</p>
                    <p>Al no colocar el resultado correcto por parte de la cantidad de goles de la selección brasileña, no se obtendrían los 5 puntos adicionales que se dan en caso de predicir el marcador exacto.</p>
                    <p>Al final en ese partido el participante obtendría un total de 3 puntos.</p>


                    <p className='mt-2'><strong>Puntos en partidos sin selección de marcador:</strong></p>
                    <ul className="list-disc ml-5 space-y-2">
                        <li>Si se acierta al ganador de las semifinales se obtendrán 2 puntos.</li>
                        <li>Si se acierta el ganador del puesto al tercer lugar se obtendrán 3 puntos.</li>
                        <li>Si se acierta el ganador de la final se obtendrán 5 puntos.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">CRITERIO DE DESEMPATE</h2>
                    <p>Si existe el caso de empate se realizará el siguiente criterio de desempate:</p>
                    <ul className="list-disc ml-5 space-y-2">
                        <li>Se elegirá un jugador que se espere que realice más goles (No cuentan goles en fase de grupos).</li>
                        <li><strong>Ejemplo:</strong> El participante A: elige a Vinícius Jr como goleador y concluye las eliminatorias con un total de 6 goles. El participante B: escoge a Morata y este finaliza con 3 goles en las eliminatorias. Por último, el participante C selecciona a C. Messi y este termina con un total de 5 goles anotados. Se contará como vencedor al participante A, por escoger al jugador con mayor cantidad de goles.</li>
                        <li>Si el empate persiste: Acierto en el marcador de la final (debe ser exacto).</li>
                        <li>Si el empate persiste: La final se define en tiempo regular. SI/NO</li>
                        <li>Si el empate persiste: La final se define en tiempos extra. SI/NO</li>
                        <li>Si el empate persiste: La final se define en penales. SI/NO</li>
                        <li>Si el empate persiste: Se dividirá el premio equitativamente.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold">Para más información:</h2>
                    <p>Contactar a Abraham Cepeda (999 365 4620) o Gabriel Gutiérrez (999 997 2751).</p>
                </section>
            </div>
        </div>
    );
};

export default QuinielaRules;