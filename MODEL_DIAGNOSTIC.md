# Haval H6 — diagnóstico de conversão

## Fonte preservada

- FBX binário 7.4: 18.553.308 bytes.
- SHA-256: `7E877C3746D59EED6DAF7723387B0D538C92D578794360C5FDB865DCED4E2875`.
- Atlas RGBA: 2048 × 2048, alpha totalmente opaco.
- RAR contém somente `h6-texture.png`.

## Modelo original

- 45 objetos, 40 meshes, 20 materiais declarados e 19 materiais usados.
- 359.027 vértices, 352.046 polígonos e 699.436 triângulos.
- 29 meshes com UV e 11 sem UV.
- Sem animações.
- Inclui mesh auxiliar `studio`.

## GLB preservado

- Conversão com Blender 5.1.2, sem Draco, decimation, remesh ou aplicação destrutiva.
- 40 meshes, 19 materiais efetivamente usados, 29 meshes com UV e um atlas incorporado.
- 699.432 triângulos após triangulação do exportador.
- 32.000.428 bytes.
- SHA-256: `24398D6F976135E62BFF3004F63C08B47300E7B55E9EBA2D284C08524182B537`.

## Alertas

- `glass_window` e materiais de faróis possuem alpha 1 e transmissão 0. A transparência será aplicada somente a cópias dos materiais em runtime.
- Os nomes dos meshes são majoritariamente genéricos (`Plane.*`); o mapeamento deve considerar também nomes de materiais.
- `studio` foi preservado no arquivo e ignorado apenas pela aplicação em runtime.
- O modelo tem cerca de 699 mil triângulos e exige avaliação de desempenho antes de qualquer otimização autorizada.
