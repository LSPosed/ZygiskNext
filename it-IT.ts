export default {
    language: { 
        name: 'Italiano (IT)'
    },
    main_fragment: {
        dashboard: 'Stato',
        basic: 'Informazioni di base',
        settings: 'Impostazioni'
    },
    bugreport: {
        export: 'Esporta bugreport',
        exporting: 'Esportazione in corso…',
        export_success_title: 'Bugreport esportato',
        export_success: 'Il bugreport è stato salvato a:',
        export_failed_title: 'Esportazione non riuscita.',
        export_failed: 'Impossibile esportare il bugreport.',
        copy_path: 'Copia percorso',
        copy_path_failed: 'Impossibile copiare il percorso',
        send_log: 'Invia log',
        send_failed: 'Invio non riuscito',
    },
    dashboard: {
        root_impl: 'Implementazione root',
        zygote_monitor: 'Monitor Zygote',
        zygisk_module_title: 'Nessun modulo Zygisk | Modulo Zygisk ({0}) | Moduli Zygisk ({0})',
        zn_module_title: 'Nessun modulo ZN | Modulo ZN ({0}) | Moduli ZN ({0})',
        root_impl_normal: 'L\'implementazione root attuale è {impl}, la lista d\'esclusione funzionerà correttamente.',
        root_impl_abnormal: 'Non è stato possibile determinare l\'implementazione root, la lista d\'esclusione non funzionerà.',
        root_impl_multiple: 'Trovate più implementazioni root, la lista d\'esclusione non funzionerà.',
        kernelsu_denylist: 'La lista d\'esclusione di KernelSU si riferisce alle app marcate « \'Unmount modules\' » nel profilo App.',
        magisk_denylist: 'La lista d\'esclusione di Magisk si riferisce alla lista d\'esclusione all\'interno di Magisk.',
        apatch_denylist: 'La lista d\'esclusione di APatch si riferisce all\'app SuperUtente la quale \'Exclude\' è abilita e disabilita root',
    },
    settings: {
        log_to_kernel: 'Registra i log a dmesg (Solo per sviluppatori)',
        nonroot_as_denylist: 'Tratta le app non-root come lista d\'esclusione',
        enforce_denylist: 'Politica della lista d\'esclusione',
        enforce_denylist_desc: 'Forzato: Blocca le modifiche di iniezione e modifiche per app in lista d\'esclusione.<br/>Solo Umount: Inverti modifiche di montaggio ma autorizza l\'iniezione di codice per app in lista di esclusione.',
        enforce_denylist_alert: 'Per utenti normali, è fortemente consigliato di disabilitare manualmente la funzione di kernel umount nel manager di KernelSU per evitare punti di montaggio ad essere smontati più volte per via di una configurazione sbagliata.',
        denylist_disabled: 'Disabilitata',
        denylist_enforced: 'Forzata',
        denylist_just_umount: 'Solo Unmount',
        anonymous_memory: 'Usa la memoria anonima',
        anonymous_memory_desc: 'Carica i moduli nella memoria anonima. Questo compromette la leggibilità dei log ma aggira alcuni meccanismi di rivelazione obsoleti.',
        zn_linker: 'Usa il linker di ZygiskNext',
        zn_linker_desc: 'Usa il linker integrato invece del linker di sistema per caricare i moduli. Questo migliorerà l\'invisibilità ma potrebbe causare problemi di compatibilità.',
    },
    zygote_inject_state: {
        running: 'Attivo',
        stop_by_user: 'Fermato dall\'utente',
        stop_by_crash: 'Arrestato a causa di un crash di Zygote',
        running_desc: 'Il monitor di Zygote sta funzionanso normalmente.',
        stop_by_user_desc: 'Monitor di Zygote fermato dall\'utente',
        stop_by_crash_desc: 'Sono stati rilevati ripetuti riavvi di Zygote, Il monitor di Zygote è stato fermato automaticamente.',
    },
    zygote_state: {
        unknown: 'Sconosciuto',
        injected: 'Iniettato ({pid})',
        inject_failed: 'Iniezione fallita ({pid})',
        skipped: 'Saltato ({pid})',
        abnormal: 'Anormale ({pid})',
        unknown_desc: 'Lo stato di questo Zygote è sconosciuto e potrebbe esistere ma non essere avviato,  o il monitor di Zygote potrebbe non rivelare il suo avvio.',
        injected_desc: 'Zygisk è stato iniettato dentro Zygote. Il suo ID del processo è {pid}',
        inject_failed_desc: 'Zygisk era stato provato ad essere iniettato dentro questo Zygote ma ha fallito. Il suo ID del processo è {pid}',
        skipped_desc: 'Lo Zygote era stato monitorato per l\'avvio. Il suo ID del processo è {pid}. Ma l\'iniezione di Zygisk è stata fermata due to multiple previous soft reboots of the system.',
        abnormal_desc: 'Zygisk è stato iniettato nel processo Zygote {pid}, ma l\'Hook JNI non ha trovato nessun metodo corrispondente ({funcs}), quindi i moduli non si caricheranno. Questa potrebbe essere una nuova versione o un sistema Android speciale. Per favore crea un nuovo issue su GitHub e fornisci /system/framework/framework.jar e /system/lib64/libandroid_runtime.so dal sistema attuale così che i developer possano aggiungere il supporto.'
    },
          
    corrupted: {
        title: 'File dei moduli corrotti',
        desc: 'Per favore annulla le modifiche a Zygisk Next e riprova.',
    },
    module: {
        issue: {
            title: 'Questo modulo ha un problema',
            companion_api_issue: 'Il modulo {name} ha un problema con l\'uso improprio dell\'API Companion, il quale potrebbe causare crash dei processi e leak in memoria. Per favore contatta lo sviluppatore di questo modulo per risolvere il problema.',
            linker_issue: 'Il modulo {name} ha fallito a caricare. Per favore segnala l\'errore allo sviluppatore del modulo.',
            crash_issue: 'Il modulo {name} è apparso nel crash del thread backtrace di: {processes}.',
            unknown_process: 'processo sconosciuto',
            learn_more: 'Visita qui per ulteriori informazioni: {link}',
            check_banner: 'Nessun modulo con problemi trovato. | {0} modulo ha un problema. Per favore controlla la lista dei moduli. | {0} moduli hanno errori. Per favore controlla la lista dei moduli.',
            badge: 'Problema',
            crash_badge: 'Crash',
        },
        zn: {
            process_count: 'Nessun processo | {0} processo | {0} processi',
        },
    }
}
