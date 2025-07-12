--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18 (Ubuntu 14.18-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.18 (Ubuntu 14.18-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: produtos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produtos (id, nome, preco, url_imagem, disponivel) FROM stdin;
2	Pano de prato decorado (kit 3)	70.00	imgs/pano_de_prato_decorado.webp	t
5	Kit espátula e concha de silicone	100.00	imgs/kit_espátula_e_concha_de_silicone.jpg	t
9	Escorredor de arroz e macarrão	50.00	imgs/escorredor_de_arroz_e_macarrão.jpg	t
12	Suporte de talheres	80.00	imgs/suporte_de_talheres.jpg	t
13	Ralador multifunção	100.00	imgs/ralador_multifunção.jpg	t
14	Kit organizador de geladeira	120.00	imgs/kit_organizador_de_geladeira.jpg	t
15	Abridor de garrafa elétrico	150.00	imgs/abridor_de_garrafa_elétrico.png	t
17	Kit petisqueira	100.00	imgs/kit_petisqueira.jpeg	t
19	Porta-condimentos	130.00	imgs/porta-condimentos.jpg	t
22	Jogo de xícaras de café (6 peças)	100.00	imgs/jogo_de_xícaras_de_café.jpeg	t
25	Pegador de massa inox	70.00	imgs/pegador_de_massa_inox.jpg	t
27	Suporte para papel toalha	60.00	imgs/suporte_para_papel_toalha.jpg	t
28	Espremedor manual de frutas	80.00	imgs/espremedor_manual_de_frutas.jpeg	t
30	Suporte para temperos giratório	150.00	imgs/suporte_para_temperos_giratório.jpg	t
31	Balde de gelo com pegador	120.00	imgs/balde_de_gelo_com_pegador.jpg	t
33	Descanso de panela	50.00	imgs/descanso_de_panela.jpg	t
34	Colher de sorvete	60.00	imgs/colher_de_sorvete.jpg	t
36	Leiteira inox	90.00	imgs/leiteira_inox.jpg	t
37	Jogo americano 4 peças	90.00	imgs/jogo_americano_4_peças.jpg	t
38	Cesto organizador de pia	70.00	imgs/cesto_organizador_de_pia.jpg	t
39	Cortador de pizza	50.00	imgs/cortador_de_pizza.jpg	t
40	Pegador de forno (luva térmica)	60.00	imgs/pegador_de_forno_(luva_térmica).jpeg	t
41	Organizador de talheres	80.00	imgs/organizador_de_talheres.jpeg	t
42	Peneira de aço inox	60.00	imgs/peneira_de_aço_inox.jpg	t
44	Porta-guardanapo decorativo	60.00	imgs/porta-guardanapo_decorativo.jpg	t
45	Mini balança de cozinha digital	150.00	imgs/mini_balança_de_cozinha_digital.jpeg	t
46	Conjunto de bowls plásticos	100.00	imgs/conjunto_de_bowls_plásticos.jpeg	t
47	Jogo de colheres medidoras	60.00	imgs/conjunto_de_colheres_medidoras.jpeg	t
48	Cortador de legumes espiral	110.00	imgs/cortador_de_legumas_espiral.jpeg	t
49	Kit escova para garrafas	80.00	imgs/kit_escovas_para_garrafa.jpeg	t
1	Pegador de salada	50.00	imgs/pegador_de_salada.jpeg	t
43	Timer de cozinha	90.00	imgs/timer_de_cozinha.jpg	t
6	Jogo de potes plásticos	70.00	imgs/jogo_de_potes_plásticos.jpg	t
3	Tábua de corte	80.00	imgs/tabua_de_corte.jpg	t
8	Pipoqueira de micro-ondas	90.00	imgs/pipoqueira_de_micro-ondas.jpg	t
10	Bule com infusor para chá	90.00	imgs/bule_com_infusor_para_chá.jpg	t
16	Jogo de copos coloridos	120.00	imgs/jogo_de_copos_coloridos.jpeg	t
11	Lixeira de pia com tampa	70.00	imgs/lixeira_de_pia_com_tampa.jpg	t
20	Conjunto de temperos	80.00	imgs/conjunto_de_temperos.jpeg	t
4	Avental de cozinha	60.00	imgs/avental_de_cozinha.jpg	t
7	Forma de bolo antiaderente	60.00	imgs/forma_de_bolo_antiaderente.jpg	t
21	Dispenser para detergente	70.00	imgs/dispenser_para_detergente.jpg	t
18	Assadeira de vidro	90.00	imgs/assadeira_de_vidro.jpg	t
35	Mini processador manual	140.00	imgs/mini_processador_manual.jpg	t
23	Escorredor de pratos pequeno	120.00	imgs/escorredor_de_pratos_pequeno.jpg	t
29	Kit de imãs decorativos	50.00	imgs/kit_de_imãs_decorativos.jpg	t
24	Conjunto de colheres de chá	60.00	imgs/conjunto_de_colheres_de_chá.jpg	t
26	Saleiro e pimenteiro decorativos	90.00	imgs/saleiro_e_pimenteiro_decorativos.jpg	t
32	Forma de cupcake	70.00	imgs/forma_de_cupcake.jpg	t
\.


--
-- Name: produtos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produtos_id_seq', 49, true);


--
-- PostgreSQL database dump complete
--

