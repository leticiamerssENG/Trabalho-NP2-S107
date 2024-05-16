email_body="Aqui está o resultado do pipeline:"
echo "$email_body" | mail -s "Assunto do E-mail" "$EMAIL_DESTINATARIO"