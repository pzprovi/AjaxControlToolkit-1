﻿using System.Xml.Serialization;

namespace AjaxControlToolkit.Config
{
    [XmlRoot("ajaxControlToolkit")]
    public class Settings
    {
        [XmlElement("controlBundles", IsNullable = false)]
        public ControlBundleSection[] ControlBundleSections { get; set; }

        [XmlElement("scripts", IsNullable = true)]
        public ScriptsSection[] ScriptsSections { get; set; }
    }

    public class ScriptsSection {
        [XmlElement("add", IsNullable = false)]
        public ScriptSection[] AddScripts { get; set; }

        [XmlElement("remove", IsNullable = false)]
        public ScriptSection[] RemoveScripts { get; set; }
    }

    public class ScriptSection {
        [XmlAttribute("name")]
        public string Name { get; set; }
        
        [XmlAttribute("assembly")]
        public string Assembly { get; set; }
    }

    public class ControlBundleSection
    {
        [XmlElement("controlBundle", IsNullable = false)]
        public ControlBundle[] ControlBundles { get; set; }
    }

    public class ControlBundle
    {
        [XmlAttribute("name")]
        public string Name { get; set; }

        [XmlElement("control", IsNullable = false)]
        public Control[] Controls { get; set; }
    }

    public class Control
    {
        [XmlAttribute("name")]
        public string Name { get; set; }

        [XmlAttribute("assembly")]
        public string Assembly { get; set; }
    }
}
