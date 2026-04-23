import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nom, prenom, email, site, message, besoins, budget } = body;

    // Validation
    if (!nom || !prenom || !email) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants.' },
        { status: 400 }
      );
    }

    // ── Option A : Resend ─────────────────────────────────────────
    // Décommentez si vous utilisez Resend (npm install resend)
    //
     const { Resend } = await import('resend');
     const resend = new Resend(process.env.RESEND_API_KEY);
    
     await resend.emails.send({
       from: 'Alsek Marketing <contact@alsek.fr>',
       to: [process.env.CONTACT_EMAIL_TO || 'contact@alsek.fr'],
       subject: `[Alsek] Nouvel audit demandé — ${prenom} ${nom}`,
       html: buildEmailHtml({ nom, prenom, email, site, message, besoins, budget }),
     });

    // ── Option B : Nodemailer SMTP ────────────────────────────────
    // Décommentez si vous préférez SMTP (npm install nodemailer)
    //
    // const nodemailer = await import('nodemailer');
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT) || 587,
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // });
    // await transporter.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: process.env.CONTACT_EMAIL_TO,
    //   subject: `[Alsek] Nouvel audit — ${prenom} ${nom}`,
    //   html: buildEmailHtml({ nom, prenom, email, site, message, besoins, budget }),
    // });

    // ── Logs console en attendant l'intégration ───────────────────
    console.log('📬 Nouvelle demande d\'audit:', {
      contact: `${prenom} ${nom} <${email}>`,
      site: site || '—',
      besoins: besoins?.join(', ') || '—',
      budget: budget || '—',
      message: message || '—',
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Erreur API contact:', error);
    return NextResponse.json(
      { error: 'Erreur serveur. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}

function buildEmailHtml({ nom, prenom, email, site, message, besoins, budget }) {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><title>Nouvelle demande d'audit</title></head>
<body style="font-family:sans-serif;background:#f5f5f5;padding:24px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
    <div style="background:#080808;padding:24px 32px;display:flex;align-items:center;gap:12px;">
      <div style="color:#C8973A;font-size:24px;font-weight:bold;letter-spacing:3px;">alsek</div>
      <div style="color:rgba(242,237,228,0.5);font-size:13px;">— Nouvelle demande d'audit gratuit</div>
    </div>
    <div style="padding:32px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${row('Prénom', prenom)}
        ${row('Nom', nom)}
        ${row('Email', `<a href="mailto:${email}" style="color:#C8973A;">${email}</a>`)}
        ${row('Site web', site ? `<a href="${site}" style="color:#C8973A;">${site}</a>` : '—')}
        ${row('Besoins', besoins?.length ? besoins.join(', ') : '—')}
        ${row('CA mensuel', budget || '—')}
        ${message ? row('Message', message) : ''}
      </table>
    </div>
    <div style="background:#f9f9f9;padding:16px 32px;border-top:1px solid #eee;font-size:12px;color:#999;">
      Envoyé depuis le formulaire d'audit de <strong>alsek.fr</strong>
    </div>
  </div>
</body>
</html>`;
}

function row(label, value) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:140px;font-size:13px;color:#888;font-weight:600;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#333;">${value}</td>
    </tr>`;
}
