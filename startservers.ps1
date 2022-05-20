..\VENV\Scripts\activate;

$ScriptBlock = {
    Test-Path "py manage.py tailwind start";
}

Start-Job $ScriptBlock -Name "tailwind" -Argumentlist $_;

# Start-Job -FilePath .\test.ps1 -Argumentlist $pwd;

py manage.py runserver;

# Remove-Job *;