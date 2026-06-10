import type { Metadata } from "next";
import { Fragment } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/sections/ContactCta";
import { SIEMENS_SINEMA_URL } from "@/content/sinema";
import { isLocale, type Locale } from "@/i18n/config";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Network,
  Layers,
  Clock,
  Server,
  Wrench,
  ExternalLink,
} from "@/components/ui/icons";

type Item = { title: string; detail: string };
type Node = { step: string; title: string; detail: string };
type Content = {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1a: string;
  h1accent: string;
  subtitle: React.ReactNode;
  ctaHero: string;
  siemensBtn: string;
  attribution: string;
  whyEyebrow: string;
  whyTitle: string;
  whyLead: string;
  why: Item[];
  offerEyebrow: string;
  offerTitle: string;
  offerLead: string;
  offerings: Item[];
  flowEyebrow: string;
  flowTitle: string;
  flowLead: string;
  flow: Node[];
  useCases: string[];
  ctaTitle: string;
  ctaLead: string;
};

const bold = (s: string) => <strong className="font-semibold text-white">{s}</strong>;

const C: Record<Locale, Content> = {
  de: {
    metaTitle: "SINEMA RC – Fernwartung",
    metaDesc:
      "Sichere Fernwartung mit SINEMA Remote Connect: gehosteter SINEMA-RC-Server im Rechenzentrum oder Ihr eigenes System. Verschlüsselte, zertifikatsbasierte VPN-Verbindungen zu Ihren Anlagen – weltweit.",
    eyebrow: "SINEMA RC · Fernwartung",
    h1a: "Sichere Fernwartung mit ",
    h1accent: "SINEMA Remote Connect",
    subtitle: (
      <>
        Ich bin Ihr Experte für SINEMA Remote Connect: Auf Wunsch betreibe ich
        einen {bold("gehosteten SINEMA-RC-Server in einem Rechenzentrum")} für
        Ihre Fernwartung – oder ich baue Ihr {bold("eigenes SINEMA-RC-System")}{" "}
        auf. Verschlüsselter, zertifikatsbasierter Zugriff auf Ihre Anlagen,
        weltweit.
      </>
    ),
    ctaHero: "Fernwartung anfragen",
    siemensBtn: "SINEMA RC bei Siemens",
    attribution:
      "SINEMA, SINEMA Remote Connect, SCALANCE und Siemens sind Marken der Siemens AG. Lienhard Automation ist unabhängiger Dienstleister und kein Vertragshändler von Siemens.",
    whyEyebrow: "Warum SINEMA RC",
    whyTitle: "Fernwartung, die sicher und einfach ist",
    whyLead:
      "SINEMA Remote Connect verbindet Ihre Anlagen sicher mit dem Service – ohne aufwändige VPN-Konfiguration und ohne öffentliche Fix-IP.",
    why: [
      { title: "Zertifikatsbasierte Sicherheit", detail: "Verschlüsselte VPN-Tunnel mit zertifikatsbasierter Authentifizierung – Zugriff nur für autorisierte Personen." },
      { title: "Hinter Firewalls & ohne feste IP", detail: "Funktioniert ohne öffentliche Fix-IP und durch Firewalls hindurch – die Anlage baut die Verbindung selbst auf." },
      { title: "Zentrale Verwaltung", detail: "Alle Fernverbindungen zentral verwaltet – übersichtlich, nachvollziehbar und skalierbar." },
      { title: "Schnelle Hilfe ohne Anreise", detail: "Störungen analysieren, Programme anpassen und Anlagen betreuen – weltweit, ohne Reisezeit." },
    ],
    offerEyebrow: "Mein Angebot",
    offerTitle: "Zwei Wege zur sicheren Fernwartung",
    offerLead:
      "Ob als Service aus dem Rechenzentrum oder als eigenes System – ich richte SINEMA Remote Connect passend für Sie ein und betreue es.",
    offerings: [
      { title: "Gehosteter SINEMA RC Server", detail: "Ich betreibe für Sie einen SINEMA Remote Connect Server in einem Rechenzentrum. Sie nutzen sichere Fernwartung als Service – ohne eigene Server-Infrastruktur, inklusive Einrichtung, Updates und Backup." },
      { title: "Ihr eigenes SINEMA RC System", detail: "Ich baue Ihr eigenes SINEMA Remote Connect System auf und richte es ein – bei Ihnen vor Ort oder in einem gemieteten Rechenzentrum. So behalten Sie die volle Kontrolle über Ihre Fernzugriffe." },
    ],
    flowEyebrow: "So funktioniert es",
    flowTitle: "Von der Anlage bis zum sicheren Zugriff",
    flowLead:
      "Die Anlage baut die Verbindung aktiv zum SINEMA-RC-Server auf – sicher, verschlüsselt und ohne Löcher in Ihrer Firewall.",
    flow: [
      { step: "01", title: "Anlage & SCALANCE-Router", detail: "Vor Ort verbindet ein SCALANCE-Router (z. B. M-800) Ihre Maschine oder Anlage mit dem SINEMA RC Server." },
      { step: "02", title: "SINEMA RC Server im Rechenzentrum", detail: "Der Server vermittelt die sicheren, zertifikatsbasierten VPN-Tunnel und verwaltet alle Zugriffe zentral." },
      { step: "03", title: "Sicherer Fernzugriff", detail: "Sie oder Ihre Techniker greifen verschlüsselt auf die Anlage zu – für Fernwartung, Diagnose und Support." },
    ],
    useCases: [
      "Fernwartung & Diagnose ohne Anreise",
      "Sichere Betreuung von Maschinen im Feld (OEM)",
      "Zentrale Verwaltung aller Standorte",
      "Schnelle Störungsbehebung – weltweit",
      "Kein VPN-Aufwand auf Kundenseite",
      "Betrieb im Rechenzentrum oder bei Ihnen",
    ],
    ctaTitle: "Fernwartung für Ihre Anlagen einrichten?",
    ctaLead:
      "Sprechen Sie mich an – ich richte SINEMA Remote Connect für Sie ein, betreibe auf Wunsch den Server im Rechenzentrum und sorge für sicheren Zugriff auf Ihre Anlagen.",
  },
  en: {
    metaTitle: "SINEMA RC – remote maintenance",
    metaDesc:
      "Secure remote maintenance with SINEMA Remote Connect: a hosted SINEMA RC server in a data centre, or your own system. Encrypted, certificate-based VPN connections to your plants – worldwide.",
    eyebrow: "SINEMA RC · Remote maintenance",
    h1a: "Secure remote maintenance with ",
    h1accent: "SINEMA Remote Connect",
    subtitle: (
      <>
        I am your expert for SINEMA Remote Connect: on request I operate a{" "}
        {bold("hosted SINEMA RC server in a data centre")} for your remote
        maintenance – or I build your {bold("own SINEMA RC system")}. Encrypted,
        certificate-based access to your plants, worldwide.
      </>
    ),
    ctaHero: "Request remote maintenance",
    siemensBtn: "SINEMA RC at Siemens",
    attribution:
      "SINEMA, SINEMA Remote Connect, SCALANCE and Siemens are trademarks of Siemens AG. Lienhard Automation is an independent service provider, not a Siemens dealer.",
    whyEyebrow: "Why SINEMA RC",
    whyTitle: "Remote maintenance that is secure and simple",
    whyLead:
      "SINEMA Remote Connect links your plants securely to the service – without complex VPN configuration and without a public fixed IP.",
    why: [
      { title: "Certificate-based security", detail: "Encrypted VPN tunnels with certificate-based authentication – access only for authorised people." },
      { title: "Behind firewalls & no fixed IP", detail: "Works without a public fixed IP and through firewalls – the plant establishes the connection itself." },
      { title: "Central management", detail: "All remote connections managed centrally – clear, traceable and scalable." },
      { title: "Fast help without travel", detail: "Analyse faults, adjust programs and support plants – worldwide, without travel time." },
    ],
    offerEyebrow: "My offering",
    offerTitle: "Two routes to secure remote maintenance",
    offerLead:
      "Whether as a service from the data centre or as your own system – I set up SINEMA Remote Connect to suit you and look after it.",
    offerings: [
      { title: "Hosted SINEMA RC server", detail: "I operate a SINEMA Remote Connect server for you in a data centre. You use secure remote maintenance as a service – without your own server infrastructure, including setup, updates and backup." },
      { title: "Your own SINEMA RC system", detail: "I build and set up your own SINEMA Remote Connect system – at your site or in a rented data centre. This way you keep full control over your remote access." },
    ],
    flowEyebrow: "How it works",
    flowTitle: "From the plant to secure access",
    flowLead:
      "The plant actively establishes the connection to the SINEMA RC server – secure, encrypted and without holes in your firewall.",
    flow: [
      { step: "01", title: "Plant & SCALANCE router", detail: "On site, a SCALANCE router (e.g. M-800) connects your machine or plant to the SINEMA RC server." },
      { step: "02", title: "SINEMA RC server in the data centre", detail: "The server brokers the secure, certificate-based VPN tunnels and manages all access centrally." },
      { step: "03", title: "Secure remote access", detail: "You or your technicians access the plant in encrypted form – for remote maintenance, diagnostics and support." },
    ],
    useCases: [
      "Remote maintenance & diagnostics without travel",
      "Secure support of machines in the field (OEM)",
      "Central management of all sites",
      "Fast fault clearing – worldwide",
      "No VPN effort on the customer side",
      "Operation in the data centre or at your site",
    ],
    ctaTitle: "Set up remote maintenance for your plants?",
    ctaLead:
      "Get in touch – I set up SINEMA Remote Connect for you, operate the server in the data centre on request and ensure secure access to your plants.",
  },
  es: {
    metaTitle: "SINEMA RC – mantenimiento remoto",
    metaDesc:
      "Mantenimiento remoto seguro con SINEMA Remote Connect: servidor SINEMA RC alojado en un centro de datos o su propio sistema. Conexiones VPN cifradas y basadas en certificados a sus instalaciones, en todo el mundo.",
    eyebrow: "SINEMA RC · Mantenimiento remoto",
    h1a: "Mantenimiento remoto seguro con ",
    h1accent: "SINEMA Remote Connect",
    subtitle: (
      <>
        Soy su experto en SINEMA Remote Connect: si lo desea, opero un{" "}
        {bold("servidor SINEMA RC alojado en un centro de datos")} para su
        mantenimiento remoto, o construyo su {bold("propio sistema SINEMA RC")}.
        Acceso cifrado y basado en certificados a sus instalaciones, en todo el
        mundo.
      </>
    ),
    ctaHero: "Solicitar mantenimiento remoto",
    siemensBtn: "SINEMA RC en Siemens",
    attribution:
      "SINEMA, SINEMA Remote Connect, SCALANCE y Siemens son marcas de Siemens AG. Lienhard Automation es un proveedor de servicios independiente, no un distribuidor de Siemens.",
    whyEyebrow: "Por qué SINEMA RC",
    whyTitle: "Mantenimiento remoto seguro y sencillo",
    whyLead:
      "SINEMA Remote Connect conecta sus instalaciones de forma segura con el servicio, sin configuración VPN compleja y sin IP fija pública.",
    why: [
      { title: "Seguridad basada en certificados", detail: "Túneles VPN cifrados con autenticación basada en certificados: acceso solo para personas autorizadas." },
      { title: "Tras cortafuegos y sin IP fija", detail: "Funciona sin IP fija pública y a través de cortafuegos: la instalación establece la conexión por sí misma." },
      { title: "Gestión centralizada", detail: "Todas las conexiones remotas gestionadas de forma centralizada: clara, trazable y escalable." },
      { title: "Ayuda rápida sin desplazamiento", detail: "Analizar averías, adaptar programas y atender instalaciones, en todo el mundo y sin tiempo de viaje." },
    ],
    offerEyebrow: "Mi oferta",
    offerTitle: "Dos vías hacia un mantenimiento remoto seguro",
    offerLead:
      "Ya sea como servicio desde el centro de datos o como sistema propio, configuro SINEMA Remote Connect a su medida y me encargo de su mantenimiento.",
    offerings: [
      { title: "Servidor SINEMA RC alojado", detail: "Opero para usted un servidor SINEMA Remote Connect en un centro de datos. Usted utiliza mantenimiento remoto seguro como servicio, sin infraestructura de servidor propia, incluyendo configuración, actualizaciones y copias de seguridad." },
      { title: "Su propio sistema SINEMA RC", detail: "Construyo y configuro su propio sistema SINEMA Remote Connect, en sus instalaciones o en un centro de datos alquilado. Así mantiene el control total sobre sus accesos remotos." },
    ],
    flowEyebrow: "Cómo funciona",
    flowTitle: "De la instalación al acceso seguro",
    flowLead:
      "La instalación establece activamente la conexión con el servidor SINEMA RC: segura, cifrada y sin abrir huecos en su cortafuegos.",
    flow: [
      { step: "01", title: "Instalación y router SCALANCE", detail: "In situ, un router SCALANCE (p. ej. M-800) conecta su máquina o instalación con el servidor SINEMA RC." },
      { step: "02", title: "Servidor SINEMA RC en el centro de datos", detail: "El servidor gestiona los túneles VPN seguros basados en certificados y administra todos los accesos de forma centralizada." },
      { step: "03", title: "Acceso remoto seguro", detail: "Usted o sus técnicos acceden a la instalación de forma cifrada, para mantenimiento remoto, diagnóstico y soporte." },
    ],
    useCases: [
      "Mantenimiento y diagnóstico remotos sin desplazamiento",
      "Atención segura de máquinas en campo (OEM)",
      "Gestión centralizada de todas las ubicaciones",
      "Resolución rápida de averías, en todo el mundo",
      "Sin esfuerzo de VPN para el cliente",
      "Operación en el centro de datos o en sus instalaciones",
    ],
    ctaTitle: "¿Configurar el mantenimiento remoto de sus instalaciones?",
    ctaLead:
      "Póngase en contacto conmigo: configuro SINEMA Remote Connect para usted, opero el servidor en el centro de datos si lo desea y garantizo un acceso seguro a sus instalaciones.",
  },
  fr: {
    metaTitle: "SINEMA RC – maintenance à distance",
    metaDesc:
      "Maintenance à distance sécurisée avec SINEMA Remote Connect : serveur SINEMA RC hébergé dans un centre de données ou votre propre système. Connexions VPN chiffrées et basées sur certificats vers vos installations, dans le monde entier.",
    eyebrow: "SINEMA RC · Maintenance à distance",
    h1a: "Maintenance à distance sécurisée avec ",
    h1accent: "SINEMA Remote Connect",
    subtitle: (
      <>
        Je suis votre expert SINEMA Remote Connect : sur demande, j'exploite un{" "}
        {bold("serveur SINEMA RC hébergé dans un centre de données")} pour votre
        maintenance à distance, ou je construis votre{" "}
        {bold("propre système SINEMA RC")}. Accès chiffré et basé sur certificats
        à vos installations, dans le monde entier.
      </>
    ),
    ctaHero: "Demander une maintenance à distance",
    siemensBtn: "SINEMA RC chez Siemens",
    attribution:
      "SINEMA, SINEMA Remote Connect, SCALANCE et Siemens sont des marques de Siemens AG. Lienhard Automation est un prestataire indépendant, pas un revendeur Siemens.",
    whyEyebrow: "Pourquoi SINEMA RC",
    whyTitle: "Une maintenance à distance sûre et simple",
    whyLead:
      "SINEMA Remote Connect relie vos installations en toute sécurité au service, sans configuration VPN complexe et sans IP fixe publique.",
    why: [
      { title: "Sécurité basée sur certificats", detail: "Tunnels VPN chiffrés avec authentification basée sur certificats : accès réservé aux personnes autorisées." },
      { title: "Derrière les pare-feu et sans IP fixe", detail: "Fonctionne sans IP fixe publique et à travers les pare-feu : l'installation établit elle-même la connexion." },
      { title: "Gestion centralisée", detail: "Toutes les connexions distantes gérées de manière centralisée : claires, traçables et évolutives." },
      { title: "Aide rapide sans déplacement", detail: "Analyser les défauts, adapter les programmes et suivre les installations, dans le monde entier et sans temps de trajet." },
    ],
    offerEyebrow: "Mon offre",
    offerTitle: "Deux voies vers une maintenance à distance sûre",
    offerLead:
      "Que ce soit comme service depuis le centre de données ou comme système propre, je configure SINEMA Remote Connect sur mesure et m'en occupe.",
    offerings: [
      { title: "Serveur SINEMA RC hébergé", detail: "J'exploite pour vous un serveur SINEMA Remote Connect dans un centre de données. Vous utilisez une maintenance à distance sécurisée comme service, sans infrastructure serveur propre, configuration, mises à jour et sauvegarde comprises." },
      { title: "Votre propre système SINEMA RC", detail: "Je construis et configure votre propre système SINEMA Remote Connect, chez vous ou dans un centre de données loué. Vous gardez ainsi le contrôle total de vos accès distants." },
    ],
    flowEyebrow: "Comment ça marche",
    flowTitle: "De l'installation à l'accès sécurisé",
    flowLead:
      "L'installation établit activement la connexion avec le serveur SINEMA RC : sûre, chiffrée et sans ouvrir de brèches dans votre pare-feu.",
    flow: [
      { step: "01", title: "Installation et routeur SCALANCE", detail: "Sur site, un routeur SCALANCE (p. ex. M-800) relie votre machine ou installation au serveur SINEMA RC." },
      { step: "02", title: "Serveur SINEMA RC dans le centre de données", detail: "Le serveur gère les tunnels VPN sécurisés basés sur certificats et administre tous les accès de manière centralisée." },
      { step: "03", title: "Accès distant sécurisé", detail: "Vous ou vos techniciens accédez à l'installation de manière chiffrée, pour la maintenance à distance, le diagnostic et le support." },
    ],
    useCases: [
      "Maintenance et diagnostic à distance sans déplacement",
      "Suivi sécurisé de machines sur le terrain (OEM)",
      "Gestion centralisée de tous les sites",
      "Résolution rapide des défauts, dans le monde entier",
      "Aucun effort VPN côté client",
      "Exploitation dans le centre de données ou chez vous",
    ],
    ctaTitle: "Configurer la maintenance à distance de vos installations ?",
    ctaLead:
      "Contactez-moi : je configure SINEMA Remote Connect pour vous, j'exploite le serveur dans le centre de données sur demande et je garantis un accès sécurisé à vos installations.",
  },
  it: {
    metaTitle: "SINEMA RC – manutenzione remota",
    metaDesc:
      "Manutenzione remota sicura con SINEMA Remote Connect: server SINEMA RC ospitato in un data center o il vostro sistema. Connessioni VPN cifrate e basate su certificati ai vostri impianti, in tutto il mondo.",
    eyebrow: "SINEMA RC · Manutenzione remota",
    h1a: "Manutenzione remota sicura con ",
    h1accent: "SINEMA Remote Connect",
    subtitle: (
      <>
        Sono il vostro esperto di SINEMA Remote Connect: su richiesta gestisco un{" "}
        {bold("server SINEMA RC ospitato in un data center")} per la vostra
        manutenzione remota, oppure realizzo il vostro{" "}
        {bold("sistema SINEMA RC dedicato")}. Accesso cifrato e basato su
        certificati ai vostri impianti, in tutto il mondo.
      </>
    ),
    ctaHero: "Richiedi manutenzione remota",
    siemensBtn: "SINEMA RC su Siemens",
    attribution:
      "SINEMA, SINEMA Remote Connect, SCALANCE e Siemens sono marchi di Siemens AG. Lienhard Automation è un fornitore di servizi indipendente, non un rivenditore Siemens.",
    whyEyebrow: "Perché SINEMA RC",
    whyTitle: "Manutenzione remota sicura e semplice",
    whyLead:
      "SINEMA Remote Connect collega i vostri impianti in modo sicuro al servizio, senza complesse configurazioni VPN e senza IP fisso pubblico.",
    why: [
      { title: "Sicurezza basata su certificati", detail: "Tunnel VPN cifrati con autenticazione basata su certificati: accesso solo per persone autorizzate." },
      { title: "Dietro i firewall e senza IP fisso", detail: "Funziona senza IP fisso pubblico e attraverso i firewall: è l'impianto a stabilire la connessione." },
      { title: "Gestione centralizzata", detail: "Tutte le connessioni remote gestite a livello centrale: chiare, tracciabili e scalabili." },
      { title: "Aiuto rapido senza trasferte", detail: "Analizzare guasti, adattare i programmi e seguire gli impianti, in tutto il mondo e senza tempi di viaggio." },
    ],
    offerEyebrow: "La mia offerta",
    offerTitle: "Due strade verso una manutenzione remota sicura",
    offerLead:
      "Come servizio dal data center o come sistema dedicato: configuro SINEMA Remote Connect su misura per voi e me ne occupo.",
    offerings: [
      { title: "Server SINEMA RC ospitato", detail: "Gestisco per voi un server SINEMA Remote Connect in un data center. Utilizzate la manutenzione remota sicura come servizio, senza infrastruttura server propria, inclusi configurazione, aggiornamenti e backup." },
      { title: "Il vostro sistema SINEMA RC", detail: "Realizzo e configuro il vostro sistema SINEMA Remote Connect, presso di voi o in un data center in affitto. Così mantenete il pieno controllo sui vostri accessi remoti." },
    ],
    flowEyebrow: "Come funziona",
    flowTitle: "Dall'impianto all'accesso sicuro",
    flowLead:
      "È l'impianto a stabilire attivamente la connessione con il server SINEMA RC: sicura, cifrata e senza aperture nel vostro firewall.",
    flow: [
      { step: "01", title: "Impianto e router SCALANCE", detail: "In loco, un router SCALANCE (es. M-800) collega la vostra macchina o il vostro impianto al server SINEMA RC." },
      { step: "02", title: "Server SINEMA RC nel data center", detail: "Il server gestisce i tunnel VPN sicuri basati su certificati e amministra tutti gli accessi a livello centrale." },
      { step: "03", title: "Accesso remoto sicuro", detail: "Voi o i vostri tecnici accedete all'impianto in forma cifrata, per manutenzione remota, diagnostica e supporto." },
    ],
    useCases: [
      "Manutenzione e diagnostica remote senza trasferte",
      "Assistenza sicura di macchine sul campo (OEM)",
      "Gestione centralizzata di tutte le sedi",
      "Risoluzione rapida dei guasti, in tutto il mondo",
      "Nessun onere VPN lato cliente",
      "Esercizio nel data center o presso di voi",
    ],
    ctaTitle: "Configurare la manutenzione remota dei vostri impianti?",
    ctaLead:
      "Contattatemi: configuro SINEMA Remote Connect per voi, su richiesta gestisco il server nel data center e garantisco un accesso sicuro ai vostri impianti.",
  },
  pt: {
    metaTitle: "SINEMA RC – manutenção remota",
    metaDesc:
      "Manutenção remota segura com SINEMA Remote Connect: servidor SINEMA RC alojado num centro de dados ou o seu próprio sistema. Ligações VPN cifradas e baseadas em certificados às suas instalações, em todo o mundo.",
    eyebrow: "SINEMA RC · Manutenção remota",
    h1a: "Manutenção remota segura com ",
    h1accent: "SINEMA Remote Connect",
    subtitle: (
      <>
        Sou o seu especialista em SINEMA Remote Connect: a pedido, opero um{" "}
        {bold("servidor SINEMA RC alojado num centro de dados")} para a sua
        manutenção remota, ou construo o seu{" "}
        {bold("próprio sistema SINEMA RC")}. Acesso cifrado e baseado em
        certificados às suas instalações, em todo o mundo.
      </>
    ),
    ctaHero: "Solicitar manutenção remota",
    siemensBtn: "SINEMA RC na Siemens",
    attribution:
      "SINEMA, SINEMA Remote Connect, SCALANCE e Siemens são marcas da Siemens AG. A Lienhard Automation é um prestador de serviços independente, não um revendedor da Siemens.",
    whyEyebrow: "Porquê SINEMA RC",
    whyTitle: "Manutenção remota segura e simples",
    whyLead:
      "O SINEMA Remote Connect liga as suas instalações de forma segura ao serviço, sem configuração VPN complexa e sem IP fixo público.",
    why: [
      { title: "Segurança baseada em certificados", detail: "Túneis VPN cifrados com autenticação baseada em certificados: acesso apenas para pessoas autorizadas." },
      { title: "Atrás de firewalls e sem IP fixo", detail: "Funciona sem IP fixo público e através de firewalls: é a instalação que estabelece a ligação." },
      { title: "Gestão centralizada", detail: "Todas as ligações remotas geridas de forma centralizada: clara, rastreável e escalável." },
      { title: "Ajuda rápida sem deslocações", detail: "Analisar avarias, ajustar programas e acompanhar instalações, em todo o mundo e sem tempo de viagem." },
    ],
    offerEyebrow: "A minha oferta",
    offerTitle: "Dois caminhos para uma manutenção remota segura",
    offerLead:
      "Seja como serviço a partir do centro de dados ou como sistema próprio, configuro o SINEMA Remote Connect à sua medida e trato da sua manutenção.",
    offerings: [
      { title: "Servidor SINEMA RC alojado", detail: "Opero para si um servidor SINEMA Remote Connect num centro de dados. Utiliza manutenção remota segura como serviço, sem infraestrutura de servidor própria, incluindo configuração, atualizações e cópias de segurança." },
      { title: "O seu próprio sistema SINEMA RC", detail: "Construo e configuro o seu próprio sistema SINEMA Remote Connect, nas suas instalações ou num centro de dados alugado. Assim mantém o controlo total sobre os seus acessos remotos." },
    ],
    flowEyebrow: "Como funciona",
    flowTitle: "Da instalação ao acesso seguro",
    flowLead:
      "É a instalação que estabelece ativamente a ligação ao servidor SINEMA RC: segura, cifrada e sem aberturas na sua firewall.",
    flow: [
      { step: "01", title: "Instalação e router SCALANCE", detail: "No local, um router SCALANCE (p. ex. M-800) liga a sua máquina ou instalação ao servidor SINEMA RC." },
      { step: "02", title: "Servidor SINEMA RC no centro de dados", detail: "O servidor gere os túneis VPN seguros baseados em certificados e administra todos os acessos de forma centralizada." },
      { step: "03", title: "Acesso remoto seguro", detail: "Você ou os seus técnicos acedem à instalação de forma cifrada, para manutenção remota, diagnóstico e suporte." },
    ],
    useCases: [
      "Manutenção e diagnóstico remotos sem deslocações",
      "Apoio seguro a máquinas no terreno (OEM)",
      "Gestão centralizada de todos os locais",
      "Resolução rápida de avarias, em todo o mundo",
      "Sem esforço de VPN do lado do cliente",
      "Operação no centro de dados ou nas suas instalações",
    ],
    ctaTitle: "Configurar a manutenção remota das suas instalações?",
    ctaLead:
      "Fale comigo: configuro o SINEMA Remote Connect para si, opero o servidor no centro de dados, se desejar, e garanto um acesso seguro às suas instalações.",
  },
};

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const t = C[isLocale(params.locale) ? params.locale : "de"];
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: { canonical: "/sinema-rc" },
  };
}

const whyIcons = [
  <ShieldCheck key="0" className="h-5 w-5" />,
  <Network key="1" className="h-5 w-5" />,
  <Layers key="2" className="h-5 w-5" />,
  <Clock key="3" className="h-5 w-5" />,
];
const offeringIcons = [
  <Server key="0" className="h-6 w-6" />,
  <Wrench key="1" className="h-6 w-6" />,
];

export default function SinemaRcPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = C[isLocale(params.locale) ? params.locale : "de"];
  return (
    <>
      {/* 1 — Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-navy [background-size:40px_40px]" />
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-accent-600/20 blur-3xl" />
        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="eyebrow-on-dark animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              {t.eyebrow}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.07] tracking-tight animate-fade-up sm:text-6xl">
              {t.h1a}
              <span className="text-accent-400">{t.h1accent}</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300 animate-fade-up">
              {t.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up">
              <ButtonLink href="/kontakt" size="lg">
                {t.ctaHero}
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={SIEMENS_SINEMA_URL} variant="outline-light" size="lg" target="_blank" rel="noopener noreferrer">
                {t.siemensBtn}
                <ExternalLink className="h-4 w-4" />
              </ButtonLink>
            </div>
            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-steel-500 animate-fade-up">
              {t.attribution}
            </p>
          </div>
        </Container>
      </section>

      {/* 2 — Why */}
      <Section tone="light">
        <SectionHeading eyebrow={t.whyEyebrow} title={t.whyTitle} lead={t.whyLead} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.map((point, i) => (
            <Reveal key={point.title} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  {whyIcons[i]}
                </div>
                <h3 className="mt-4 font-bold text-navy-900">{point.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-600">{point.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3 — My offering */}
      <Section tone="muted">
        <SectionHeading eyebrow={t.offerEyebrow} title={t.offerTitle} lead={t.offerLead} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.offerings.map((offering, i) => (
            <Reveal key={offering.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-xl2 border border-steel-200 bg-white p-8 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  {offeringIcons[i]}
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-900">{offering.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-600">{offering.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4 — How it works */}
      <Section tone="dark">
        <SectionHeading eyebrow={t.flowEyebrow} title={t.flowTitle} lead={t.flowLead} onDark />
        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[1fr,auto,1fr,auto,1fr]">
          {t.flow.map((node, i) => (
            <Fragment key={node.step}>
              <div className="rounded-xl2 border border-navy-700 bg-navy-800/60 p-6">
                <span className="text-sm font-bold text-accent-400">{node.step}</span>
                <h3 className="mt-2 text-lg font-bold text-white">{node.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-300">{node.detail}</p>
              </div>
              {i < t.flow.length - 1 ? (
                <div className="hidden items-center justify-center lg:flex">
                  <ArrowRight className="h-6 w-6 text-accent-500" />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </Section>

      {/* 5 — Use cases */}
      <Section tone="light" className="!py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.useCases.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl2 border border-steel-200 bg-steel-50 p-5">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
              <span className="text-sm text-steel-700">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <ContactCta title={t.ctaTitle} lead={t.ctaLead} />
    </>
  );
}
