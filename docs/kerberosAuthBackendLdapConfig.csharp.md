# `kerberosAuthBackendLdapConfig` Submodule <a name="`kerberosAuthBackendLdapConfig` Submodule" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KerberosAuthBackendLdapConfig <a name="KerberosAuthBackendLdapConfig" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config vault_kerberos_auth_backend_ldap_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KerberosAuthBackendLdapConfig(Construct Scope, string Id, KerberosAuthBackendLdapConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig">KerberosAuthBackendLdapConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig">KerberosAuthBackendLdapConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAnonymousGroupSearch">ResetAnonymousGroupSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBinddn">ResetBinddn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWo">ResetBindpassWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWoVersion">ResetBindpassWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCaseSensitiveNames">ResetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWo">ResetClientTlsCertWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWoVersion">ResetClientTlsCertWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWo">ResetClientTlsKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWoVersion">ResetClientTlsKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetConnectionTimeout">ResetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDenyNullBind">ResetDenyNullBind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDereferenceAliases">ResetDereferenceAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDiscoverdn">ResetDiscoverdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetEnableSamaccountnameLogin">ResetEnableSamaccountnameLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupattr">ResetGroupattr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupdn">ResetGroupdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupfilter">ResetGroupfilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetMaxPageSize">ResetMaxPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetStarttls">ResetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMaxVersion">ResetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMinVersion">ResetTlsMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenType">ResetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUpndomain">ResetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserattr">ResetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserdn">ResetUserdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserfilter">ResetUserfilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUsernameAsAlias">ResetUsernameAsAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUseTokenGroups">ResetUseTokenGroups</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAliasMetadata"></a>

```csharp
private void ResetAliasMetadata()
```

##### `ResetAnonymousGroupSearch` <a name="ResetAnonymousGroupSearch" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAnonymousGroupSearch"></a>

```csharp
private void ResetAnonymousGroupSearch()
```

##### `ResetBinddn` <a name="ResetBinddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBinddn"></a>

```csharp
private void ResetBinddn()
```

##### `ResetBindpassWo` <a name="ResetBindpassWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWo"></a>

```csharp
private void ResetBindpassWo()
```

##### `ResetBindpassWoVersion` <a name="ResetBindpassWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWoVersion"></a>

```csharp
private void ResetBindpassWoVersion()
```

##### `ResetCaseSensitiveNames` <a name="ResetCaseSensitiveNames" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCaseSensitiveNames"></a>

```csharp
private void ResetCaseSensitiveNames()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetClientTlsCertWo` <a name="ResetClientTlsCertWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWo"></a>

```csharp
private void ResetClientTlsCertWo()
```

##### `ResetClientTlsCertWoVersion` <a name="ResetClientTlsCertWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWoVersion"></a>

```csharp
private void ResetClientTlsCertWoVersion()
```

##### `ResetClientTlsKeyWo` <a name="ResetClientTlsKeyWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWo"></a>

```csharp
private void ResetClientTlsKeyWo()
```

##### `ResetClientTlsKeyWoVersion` <a name="ResetClientTlsKeyWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWoVersion"></a>

```csharp
private void ResetClientTlsKeyWoVersion()
```

##### `ResetConnectionTimeout` <a name="ResetConnectionTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetConnectionTimeout"></a>

```csharp
private void ResetConnectionTimeout()
```

##### `ResetDenyNullBind` <a name="ResetDenyNullBind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDenyNullBind"></a>

```csharp
private void ResetDenyNullBind()
```

##### `ResetDereferenceAliases` <a name="ResetDereferenceAliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDereferenceAliases"></a>

```csharp
private void ResetDereferenceAliases()
```

##### `ResetDiscoverdn` <a name="ResetDiscoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDiscoverdn"></a>

```csharp
private void ResetDiscoverdn()
```

##### `ResetEnableSamaccountnameLogin` <a name="ResetEnableSamaccountnameLogin" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetEnableSamaccountnameLogin"></a>

```csharp
private void ResetEnableSamaccountnameLogin()
```

##### `ResetGroupattr` <a name="ResetGroupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupattr"></a>

```csharp
private void ResetGroupattr()
```

##### `ResetGroupdn` <a name="ResetGroupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupdn"></a>

```csharp
private void ResetGroupdn()
```

##### `ResetGroupfilter` <a name="ResetGroupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupfilter"></a>

```csharp
private void ResetGroupfilter()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetInsecureTls"></a>

```csharp
private void ResetInsecureTls()
```

##### `ResetMaxPageSize` <a name="ResetMaxPageSize" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetMaxPageSize"></a>

```csharp
private void ResetMaxPageSize()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetRequestTimeout"></a>

```csharp
private void ResetRequestTimeout()
```

##### `ResetStarttls` <a name="ResetStarttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetStarttls"></a>

```csharp
private void ResetStarttls()
```

##### `ResetTlsMaxVersion` <a name="ResetTlsMaxVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMaxVersion"></a>

```csharp
private void ResetTlsMaxVersion()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMinVersion"></a>

```csharp
private void ResetTlsMinVersion()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenBoundCidrs"></a>

```csharp
private void ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenExplicitMaxTtl"></a>

```csharp
private void ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNoDefaultPolicy"></a>

```csharp
private void ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNumUses"></a>

```csharp
private void ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPeriod"></a>

```csharp
private void ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPolicies"></a>

```csharp
private void ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenType"></a>

```csharp
private void ResetTokenType()
```

##### `ResetUpndomain` <a name="ResetUpndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUpndomain"></a>

```csharp
private void ResetUpndomain()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUserattr` <a name="ResetUserattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserattr"></a>

```csharp
private void ResetUserattr()
```

##### `ResetUserdn` <a name="ResetUserdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserdn"></a>

```csharp
private void ResetUserdn()
```

##### `ResetUserfilter` <a name="ResetUserfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserfilter"></a>

```csharp
private void ResetUserfilter()
```

##### `ResetUsernameAsAlias` <a name="ResetUsernameAsAlias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUsernameAsAlias"></a>

```csharp
private void ResetUsernameAsAlias()
```

##### `ResetUseTokenGroups` <a name="ResetUseTokenGroups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUseTokenGroups"></a>

```csharp
private void ResetUseTokenGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KerberosAuthBackendLdapConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KerberosAuthBackendLdapConfig.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KerberosAuthBackendLdapConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KerberosAuthBackendLdapConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KerberosAuthBackendLdapConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KerberosAuthBackendLdapConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KerberosAuthBackendLdapConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KerberosAuthBackendLdapConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KerberosAuthBackendLdapConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearchInput">AnonymousGroupSearchInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddnInput">BinddnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoInput">BindpassWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersionInput">BindpassWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNamesInput">CaseSensitiveNamesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoInput">ClientTlsCertWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersionInput">ClientTlsCertWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoInput">ClientTlsKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersionInput">ClientTlsKeyWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeoutInput">ConnectionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBindInput">DenyNullBindInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliasesInput">DereferenceAliasesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdnInput">DiscoverdnInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLoginInput">EnableSamaccountnameLoginInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattrInput">GroupattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdnInput">GroupdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilterInput">GroupfilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSizeInput">MaxPageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttlsInput">StarttlsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersionInput">TlsMaxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtlInput">TokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomainInput">UpndomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattrInput">UserattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdnInput">UserdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilterInput">UserfilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAliasInput">UsernameAsAliasInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroupsInput">UseTokenGroupsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearch">AnonymousGroupSearch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddn">Binddn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWo">BindpassWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersion">BindpassWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWo">ClientTlsCertWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersion">ClientTlsCertWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWo">ClientTlsKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersion">ClientTlsKeyWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBind">DenyNullBind</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliases">DereferenceAliases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdn">Discoverdn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLogin">EnableSamaccountnameLogin</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattr">Groupattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdn">Groupdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilter">Groupfilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTls">InsecureTls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSize">MaxPageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeout">RequestTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttls">Starttls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomain">Upndomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattr">Userattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdn">Userdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilter">Userfilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAlias">UsernameAsAlias</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroups">UseTokenGroups</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnonymousGroupSearchInput`<sup>Optional</sup> <a name="AnonymousGroupSearchInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearchInput"></a>

```csharp
public bool|IResolvable AnonymousGroupSearchInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BinddnInput`<sup>Optional</sup> <a name="BinddnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddnInput"></a>

```csharp
public string BinddnInput { get; }
```

- *Type:* string

---

##### `BindpassWoInput`<sup>Optional</sup> <a name="BindpassWoInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoInput"></a>

```csharp
public string BindpassWoInput { get; }
```

- *Type:* string

---

##### `BindpassWoVersionInput`<sup>Optional</sup> <a name="BindpassWoVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersionInput"></a>

```csharp
public double BindpassWoVersionInput { get; }
```

- *Type:* double

---

##### `CaseSensitiveNamesInput`<sup>Optional</sup> <a name="CaseSensitiveNamesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNamesInput"></a>

```csharp
public bool|IResolvable CaseSensitiveNamesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `ClientTlsCertWoInput`<sup>Optional</sup> <a name="ClientTlsCertWoInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoInput"></a>

```csharp
public string ClientTlsCertWoInput { get; }
```

- *Type:* string

---

##### `ClientTlsCertWoVersionInput`<sup>Optional</sup> <a name="ClientTlsCertWoVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersionInput"></a>

```csharp
public double ClientTlsCertWoVersionInput { get; }
```

- *Type:* double

---

##### `ClientTlsKeyWoInput`<sup>Optional</sup> <a name="ClientTlsKeyWoInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoInput"></a>

```csharp
public string ClientTlsKeyWoInput { get; }
```

- *Type:* string

---

##### `ClientTlsKeyWoVersionInput`<sup>Optional</sup> <a name="ClientTlsKeyWoVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersionInput"></a>

```csharp
public double ClientTlsKeyWoVersionInput { get; }
```

- *Type:* double

---

##### `ConnectionTimeoutInput`<sup>Optional</sup> <a name="ConnectionTimeoutInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeoutInput"></a>

```csharp
public double ConnectionTimeoutInput { get; }
```

- *Type:* double

---

##### `DenyNullBindInput`<sup>Optional</sup> <a name="DenyNullBindInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBindInput"></a>

```csharp
public bool|IResolvable DenyNullBindInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DereferenceAliasesInput`<sup>Optional</sup> <a name="DereferenceAliasesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliasesInput"></a>

```csharp
public string DereferenceAliasesInput { get; }
```

- *Type:* string

---

##### `DiscoverdnInput`<sup>Optional</sup> <a name="DiscoverdnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdnInput"></a>

```csharp
public bool|IResolvable DiscoverdnInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableSamaccountnameLoginInput`<sup>Optional</sup> <a name="EnableSamaccountnameLoginInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLoginInput"></a>

```csharp
public bool|IResolvable EnableSamaccountnameLoginInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GroupattrInput`<sup>Optional</sup> <a name="GroupattrInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattrInput"></a>

```csharp
public string GroupattrInput { get; }
```

- *Type:* string

---

##### `GroupdnInput`<sup>Optional</sup> <a name="GroupdnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdnInput"></a>

```csharp
public string GroupdnInput { get; }
```

- *Type:* string

---

##### `GroupfilterInput`<sup>Optional</sup> <a name="GroupfilterInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilterInput"></a>

```csharp
public string GroupfilterInput { get; }
```

- *Type:* string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTlsInput"></a>

```csharp
public bool|IResolvable InsecureTlsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxPageSizeInput`<sup>Optional</sup> <a name="MaxPageSizeInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSizeInput"></a>

```csharp
public double MaxPageSizeInput { get; }
```

- *Type:* double

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeoutInput"></a>

```csharp
public double RequestTimeoutInput { get; }
```

- *Type:* double

---

##### `StarttlsInput`<sup>Optional</sup> <a name="StarttlsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttlsInput"></a>

```csharp
public bool|IResolvable StarttlsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TlsMaxVersionInput`<sup>Optional</sup> <a name="TlsMaxVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersionInput"></a>

```csharp
public string TlsMaxVersionInput { get; }
```

- *Type:* string

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersionInput"></a>

```csharp
public string TlsMinVersionInput { get; }
```

- *Type:* string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrsInput"></a>

```csharp
public string[] TokenBoundCidrsInput { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtlInput"></a>

```csharp
public double TokenExplicitMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicyInput"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUsesInput"></a>

```csharp
public double TokenNumUsesInput { get; }
```

- *Type:* double

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriodInput"></a>

```csharp
public double TokenPeriodInput { get; }
```

- *Type:* double

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPoliciesInput"></a>

```csharp
public string[] TokenPoliciesInput { get; }
```

- *Type:* string[]

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtlInput"></a>

```csharp
public double TokenTtlInput { get; }
```

- *Type:* double

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `UpndomainInput`<sup>Optional</sup> <a name="UpndomainInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomainInput"></a>

```csharp
public string UpndomainInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UserattrInput`<sup>Optional</sup> <a name="UserattrInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattrInput"></a>

```csharp
public string UserattrInput { get; }
```

- *Type:* string

---

##### `UserdnInput`<sup>Optional</sup> <a name="UserdnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdnInput"></a>

```csharp
public string UserdnInput { get; }
```

- *Type:* string

---

##### `UserfilterInput`<sup>Optional</sup> <a name="UserfilterInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilterInput"></a>

```csharp
public string UserfilterInput { get; }
```

- *Type:* string

---

##### `UsernameAsAliasInput`<sup>Optional</sup> <a name="UsernameAsAliasInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAliasInput"></a>

```csharp
public bool|IResolvable UsernameAsAliasInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseTokenGroupsInput`<sup>Optional</sup> <a name="UseTokenGroupsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroupsInput"></a>

```csharp
public bool|IResolvable UseTokenGroupsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnonymousGroupSearch`<sup>Required</sup> <a name="AnonymousGroupSearch" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearch"></a>

```csharp
public bool|IResolvable AnonymousGroupSearch { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Binddn`<sup>Required</sup> <a name="Binddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddn"></a>

```csharp
public string Binddn { get; }
```

- *Type:* string

---

##### ~~`BindpassWo`~~<sup>Required</sup> <a name="BindpassWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string BindpassWo { get; }
```

- *Type:* string

---

##### `BindpassWoVersion`<sup>Required</sup> <a name="BindpassWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersion"></a>

```csharp
public double BindpassWoVersion { get; }
```

- *Type:* double

---

##### `CaseSensitiveNames`<sup>Required</sup> <a name="CaseSensitiveNames" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNames"></a>

```csharp
public bool|IResolvable CaseSensitiveNames { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### ~~`ClientTlsCertWo`~~<sup>Required</sup> <a name="ClientTlsCertWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string ClientTlsCertWo { get; }
```

- *Type:* string

---

##### `ClientTlsCertWoVersion`<sup>Required</sup> <a name="ClientTlsCertWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersion"></a>

```csharp
public double ClientTlsCertWoVersion { get; }
```

- *Type:* double

---

##### ~~`ClientTlsKeyWo`~~<sup>Required</sup> <a name="ClientTlsKeyWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string ClientTlsKeyWo { get; }
```

- *Type:* string

---

##### `ClientTlsKeyWoVersion`<sup>Required</sup> <a name="ClientTlsKeyWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersion"></a>

```csharp
public double ClientTlsKeyWoVersion { get; }
```

- *Type:* double

---

##### `ConnectionTimeout`<sup>Required</sup> <a name="ConnectionTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; }
```

- *Type:* double

---

##### `DenyNullBind`<sup>Required</sup> <a name="DenyNullBind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBind"></a>

```csharp
public bool|IResolvable DenyNullBind { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DereferenceAliases`<sup>Required</sup> <a name="DereferenceAliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliases"></a>

```csharp
public string DereferenceAliases { get; }
```

- *Type:* string

---

##### `Discoverdn`<sup>Required</sup> <a name="Discoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdn"></a>

```csharp
public bool|IResolvable Discoverdn { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableSamaccountnameLogin`<sup>Required</sup> <a name="EnableSamaccountnameLogin" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLogin"></a>

```csharp
public bool|IResolvable EnableSamaccountnameLogin { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Groupattr`<sup>Required</sup> <a name="Groupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattr"></a>

```csharp
public string Groupattr { get; }
```

- *Type:* string

---

##### `Groupdn`<sup>Required</sup> <a name="Groupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdn"></a>

```csharp
public string Groupdn { get; }
```

- *Type:* string

---

##### `Groupfilter`<sup>Required</sup> <a name="Groupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilter"></a>

```csharp
public string Groupfilter { get; }
```

- *Type:* string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTls"></a>

```csharp
public bool|IResolvable InsecureTls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxPageSize`<sup>Required</sup> <a name="MaxPageSize" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSize"></a>

```csharp
public double MaxPageSize { get; }
```

- *Type:* double

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RequestTimeout`<sup>Required</sup> <a name="RequestTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeout"></a>

```csharp
public double RequestTimeout { get; }
```

- *Type:* double

---

##### `Starttls`<sup>Required</sup> <a name="Starttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttls"></a>

```csharp
public bool|IResolvable Starttls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TlsMaxVersion`<sup>Required</sup> <a name="TlsMaxVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersion"></a>

```csharp
public string TlsMaxVersion { get; }
```

- *Type:* string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; }
```

- *Type:* string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; }
```

- *Type:* double

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; }
```

- *Type:* double

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `Upndomain`<sup>Required</sup> <a name="Upndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomain"></a>

```csharp
public string Upndomain { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Userattr`<sup>Required</sup> <a name="Userattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattr"></a>

```csharp
public string Userattr { get; }
```

- *Type:* string

---

##### `Userdn`<sup>Required</sup> <a name="Userdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdn"></a>

```csharp
public string Userdn { get; }
```

- *Type:* string

---

##### `Userfilter`<sup>Required</sup> <a name="Userfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilter"></a>

```csharp
public string Userfilter { get; }
```

- *Type:* string

---

##### `UsernameAsAlias`<sup>Required</sup> <a name="UsernameAsAlias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAlias"></a>

```csharp
public bool|IResolvable UsernameAsAlias { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseTokenGroups`<sup>Required</sup> <a name="UseTokenGroups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroups"></a>

```csharp
public bool|IResolvable UseTokenGroups { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KerberosAuthBackendLdapConfigConfig <a name="KerberosAuthBackendLdapConfigConfig" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KerberosAuthBackendLdapConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    System.Collections.Generic.IDictionary<string, string> AliasMetadata = null,
    bool|IResolvable AnonymousGroupSearch = null,
    string Binddn = null,
    string BindpassWo = null,
    double BindpassWoVersion = null,
    bool|IResolvable CaseSensitiveNames = null,
    string Certificate = null,
    string ClientTlsCertWo = null,
    double ClientTlsCertWoVersion = null,
    string ClientTlsKeyWo = null,
    double ClientTlsKeyWoVersion = null,
    double ConnectionTimeout = null,
    bool|IResolvable DenyNullBind = null,
    string DereferenceAliases = null,
    bool|IResolvable Discoverdn = null,
    bool|IResolvable EnableSamaccountnameLogin = null,
    string Groupattr = null,
    string Groupdn = null,
    string Groupfilter = null,
    bool|IResolvable InsecureTls = null,
    double MaxPageSize = null,
    string Namespace = null,
    double RequestTimeout = null,
    bool|IResolvable Starttls = null,
    string TlsMaxVersion = null,
    string TlsMinVersion = null,
    string[] TokenBoundCidrs = null,
    double TokenExplicitMaxTtl = null,
    double TokenMaxTtl = null,
    bool|IResolvable TokenNoDefaultPolicy = null,
    double TokenNumUses = null,
    double TokenPeriod = null,
    string[] TokenPolicies = null,
    double TokenTtl = null,
    string TokenType = null,
    string Upndomain = null,
    string Url = null,
    string Userattr = null,
    string Userdn = null,
    string Userfilter = null,
    bool|IResolvable UsernameAsAlias = null,
    bool|IResolvable UseTokenGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.mount">Mount</a></code> | <code>string</code> | Path where the Kerberos auth method is mounted. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.anonymousGroupSearch">AnonymousGroupSearch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use anonymous binds when performing LDAP group searches. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.binddn">Binddn</a></code> | <code>string</code> | Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com'). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWo">BindpassWo</a></code> | <code>string</code> | LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWoVersion">BindpassWoVersion</a></code> | <code>double</code> | Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.caseSensitiveNames">CaseSensitiveNames</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, usernames and group names are case sensitive. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.certificate">Certificate</a></code> | <code>string</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWo">ClientTlsCertWo</a></code> | <code>string</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWoVersion">ClientTlsCertWoVersion</a></code> | <code>double</code> | Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWo">ClientTlsKeyWo</a></code> | <code>string</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWoVersion">ClientTlsKeyWoVersion</a></code> | <code>double</code> | Version identifier for client TLS key updates. Must be used together with client_tls_key_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.denyNullBind">DenyNullBind</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dereferenceAliases">DereferenceAliases</a></code> | <code>string</code> | When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.discoverdn">Discoverdn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use anonymous bind to discover bind DN of a user. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.enableSamaccountnameLogin">EnableSamaccountnameLogin</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupattr">Groupattr</a></code> | <code>string</code> | LDAP attribute to follow for group membership. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupdn">Groupdn</a></code> | <code>string</code> | LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupfilter">Groupfilter</a></code> | <code>string</code> | Go template for querying group membership of user. Default: '(\|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.insecureTls">InsecureTls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Skip TLS certificate verification. Not recommended for production. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.maxPageSize">MaxPageSize</a></code> | <code>double</code> | If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.requestTimeout">RequestTimeout</a></code> | <code>double</code> | Timeout, in seconds, for the connection when making requests against the server. Default: 90. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.starttls">Starttls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Issue a StartTLS command after establishing an unencrypted connection. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMaxVersion">TlsMaxVersion</a></code> | <code>string</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenType">TokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.upndomain">Upndomain</a></code> | <code>string</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.url">Url</a></code> | <code>string</code> | LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userattr">Userattr</a></code> | <code>string</code> | Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userdn">Userdn</a></code> | <code>string</code> | LDAP domain to use for users (e.g., ou=People,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userfilter">Userfilter</a></code> | <code>string</code> | Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.usernameAsAlias">UsernameAsAlias</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use username as alias name. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.useTokenGroups">UseTokenGroups</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, use the Active Directory tokenGroups constructed attribute. Default: false. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path where the Kerberos auth method is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#mount KerberosAuthBackendLdapConfig#mount}

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#alias_metadata KerberosAuthBackendLdapConfig#alias_metadata}

---

##### `AnonymousGroupSearch`<sup>Optional</sup> <a name="AnonymousGroupSearch" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.anonymousGroupSearch"></a>

```csharp
public bool|IResolvable AnonymousGroupSearch { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use anonymous binds when performing LDAP group searches. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#anonymous_group_search KerberosAuthBackendLdapConfig#anonymous_group_search}

---

##### `Binddn`<sup>Optional</sup> <a name="Binddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.binddn"></a>

```csharp
public string Binddn { get; set; }
```

- *Type:* string

Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#binddn KerberosAuthBackendLdapConfig#binddn}

---

##### `BindpassWo`<sup>Optional</sup> <a name="BindpassWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWo"></a>

```csharp
public string BindpassWo { get; set; }
```

- *Type:* string

LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo KerberosAuthBackendLdapConfig#bindpass_wo}

---

##### `BindpassWoVersion`<sup>Optional</sup> <a name="BindpassWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWoVersion"></a>

```csharp
public double BindpassWoVersion { get; set; }
```

- *Type:* double

Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo_version KerberosAuthBackendLdapConfig#bindpass_wo_version}

---

##### `CaseSensitiveNames`<sup>Optional</sup> <a name="CaseSensitiveNames" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.caseSensitiveNames"></a>

```csharp
public bool|IResolvable CaseSensitiveNames { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, usernames and group names are case sensitive. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#case_sensitive_names KerberosAuthBackendLdapConfig#case_sensitive_names}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#certificate KerberosAuthBackendLdapConfig#certificate}

---

##### `ClientTlsCertWo`<sup>Optional</sup> <a name="ClientTlsCertWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWo"></a>

```csharp
public string ClientTlsCertWo { get; set; }
```

- *Type:* string

Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_cert_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo KerberosAuthBackendLdapConfig#client_tls_cert_wo}

---

##### `ClientTlsCertWoVersion`<sup>Optional</sup> <a name="ClientTlsCertWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWoVersion"></a>

```csharp
public double ClientTlsCertWoVersion { get; set; }
```

- *Type:* double

Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo_version KerberosAuthBackendLdapConfig#client_tls_cert_wo_version}

---

##### `ClientTlsKeyWo`<sup>Optional</sup> <a name="ClientTlsKeyWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWo"></a>

```csharp
public string ClientTlsKeyWo { get; set; }
```

- *Type:* string

Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_key_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo KerberosAuthBackendLdapConfig#client_tls_key_wo}

---

##### `ClientTlsKeyWoVersion`<sup>Optional</sup> <a name="ClientTlsKeyWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWoVersion"></a>

```csharp
public double ClientTlsKeyWoVersion { get; set; }
```

- *Type:* double

Version identifier for client TLS key updates. Must be used together with client_tls_key_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo_version KerberosAuthBackendLdapConfig#client_tls_key_wo_version}

---

##### `ConnectionTimeout`<sup>Optional</sup> <a name="ConnectionTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; set; }
```

- *Type:* double

Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#connection_timeout KerberosAuthBackendLdapConfig#connection_timeout}

---

##### `DenyNullBind`<sup>Optional</sup> <a name="DenyNullBind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.denyNullBind"></a>

```csharp
public bool|IResolvable DenyNullBind { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#deny_null_bind KerberosAuthBackendLdapConfig#deny_null_bind}

---

##### `DereferenceAliases`<sup>Optional</sup> <a name="DereferenceAliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dereferenceAliases"></a>

```csharp
public string DereferenceAliases { get; set; }
```

- *Type:* string

When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#dereference_aliases KerberosAuthBackendLdapConfig#dereference_aliases}

---

##### `Discoverdn`<sup>Optional</sup> <a name="Discoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.discoverdn"></a>

```csharp
public bool|IResolvable Discoverdn { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use anonymous bind to discover bind DN of a user. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#discoverdn KerberosAuthBackendLdapConfig#discoverdn}

---

##### `EnableSamaccountnameLogin`<sup>Optional</sup> <a name="EnableSamaccountnameLogin" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.enableSamaccountnameLogin"></a>

```csharp
public bool|IResolvable EnableSamaccountnameLogin { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined.

Default: false. **Note:** Requires Vault 1.19.0+

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#enable_samaccountname_login KerberosAuthBackendLdapConfig#enable_samaccountname_login}

---

##### `Groupattr`<sup>Optional</sup> <a name="Groupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupattr"></a>

```csharp
public string Groupattr { get; set; }
```

- *Type:* string

LDAP attribute to follow for group membership. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupattr KerberosAuthBackendLdapConfig#groupattr}

---

##### `Groupdn`<sup>Optional</sup> <a name="Groupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupdn"></a>

```csharp
public string Groupdn { get; set; }
```

- *Type:* string

LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupdn KerberosAuthBackendLdapConfig#groupdn}

---

##### `Groupfilter`<sup>Optional</sup> <a name="Groupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupfilter"></a>

```csharp
public string Groupfilter { get; set; }
```

- *Type:* string

Go template for querying group membership of user. Default: '(|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupfilter KerberosAuthBackendLdapConfig#groupfilter}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.insecureTls"></a>

```csharp
public bool|IResolvable InsecureTls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Skip TLS certificate verification. Not recommended for production. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#insecure_tls KerberosAuthBackendLdapConfig#insecure_tls}

---

##### `MaxPageSize`<sup>Optional</sup> <a name="MaxPageSize" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.maxPageSize"></a>

```csharp
public double MaxPageSize { get; set; }
```

- *Type:* double

If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control.

Default: 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#max_page_size KerberosAuthBackendLdapConfig#max_page_size}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#namespace KerberosAuthBackendLdapConfig#namespace}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.requestTimeout"></a>

```csharp
public double RequestTimeout { get; set; }
```

- *Type:* double

Timeout, in seconds, for the connection when making requests against the server. Default: 90.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#request_timeout KerberosAuthBackendLdapConfig#request_timeout}

---

##### `Starttls`<sup>Optional</sup> <a name="Starttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.starttls"></a>

```csharp
public bool|IResolvable Starttls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Issue a StartTLS command after establishing an unencrypted connection. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#starttls KerberosAuthBackendLdapConfig#starttls}

---

##### `TlsMaxVersion`<sup>Optional</sup> <a name="TlsMaxVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMaxVersion"></a>

```csharp
public string TlsMaxVersion { get; set; }
```

- *Type:* string

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_max_version KerberosAuthBackendLdapConfig#tls_max_version}

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; set; }
```

- *Type:* string

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_min_version KerberosAuthBackendLdapConfig#tls_min_version}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; set; }
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_bound_cidrs KerberosAuthBackendLdapConfig#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; set; }
```

- *Type:* double

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_explicit_max_ttl KerberosAuthBackendLdapConfig#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_max_ttl KerberosAuthBackendLdapConfig#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_no_default_policy KerberosAuthBackendLdapConfig#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; set; }
```

- *Type:* double

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_num_uses KerberosAuthBackendLdapConfig#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; set; }
```

- *Type:* double

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_period KerberosAuthBackendLdapConfig#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; set; }
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_policies KerberosAuthBackendLdapConfig#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; set; }
```

- *Type:* double

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_ttl KerberosAuthBackendLdapConfig#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_type KerberosAuthBackendLdapConfig#token_type}

---

##### `Upndomain`<sup>Optional</sup> <a name="Upndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.upndomain"></a>

```csharp
public string Upndomain { get; set; }
```

- *Type:* string

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#upndomain KerberosAuthBackendLdapConfig#upndomain}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#url KerberosAuthBackendLdapConfig#url}

---

##### `Userattr`<sup>Optional</sup> <a name="Userattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userattr"></a>

```csharp
public string Userattr { get; set; }
```

- *Type:* string

Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userattr KerberosAuthBackendLdapConfig#userattr}

---

##### `Userdn`<sup>Optional</sup> <a name="Userdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userdn"></a>

```csharp
public string Userdn { get; set; }
```

- *Type:* string

LDAP domain to use for users (e.g., ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userdn KerberosAuthBackendLdapConfig#userdn}

---

##### `Userfilter`<sup>Optional</sup> <a name="Userfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userfilter"></a>

```csharp
public string Userfilter { get; set; }
```

- *Type:* string

Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userfilter KerberosAuthBackendLdapConfig#userfilter}

---

##### `UsernameAsAlias`<sup>Optional</sup> <a name="UsernameAsAlias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.usernameAsAlias"></a>

```csharp
public bool|IResolvable UsernameAsAlias { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use username as alias name. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#username_as_alias KerberosAuthBackendLdapConfig#username_as_alias}

---

##### `UseTokenGroups`<sup>Optional</sup> <a name="UseTokenGroups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.useTokenGroups"></a>

```csharp
public bool|IResolvable UseTokenGroups { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, use the Active Directory tokenGroups constructed attribute. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#use_token_groups KerberosAuthBackendLdapConfig#use_token_groups}

---



