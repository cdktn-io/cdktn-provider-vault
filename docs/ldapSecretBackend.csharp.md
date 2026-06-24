# `ldapSecretBackend` Submodule <a name="`ldapSecretBackend` Submodule" id="@cdktn/provider-vault.ldapSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackend <a name="LdapSecretBackend" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend vault_ldap_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new LdapSecretBackend(Construct Scope, string Id, LdapSecretBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig">LdapSecretBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig">LdapSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedManagedKeys">ResetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetBindpass">ResetBindpass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetBindpassWo">ResetBindpassWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetBindpassWoVersion">ResetBindpassWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsCert">ResetClientTlsCert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsKey">ResetClientTlsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetConnectionTimeout">ResetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCredentialType">ResetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDelegatedAuthAccessors">ResetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetExternalEntropyAccess">ResetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetForceNoCache">ResetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetIdentityTokenKey">ResetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetInsecureTls">ResetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPluginVersion">ResetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSealWrap">ResetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSelfManaged">ResetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSkipStaticRoleImportRotation">ResetSkipStaticRoleImportRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetStarttls">ResetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUpndomain">ResetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserattr">ResetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserdn">ResetUserdn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedManagedKeys` <a name="ResetAllowedManagedKeys" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedManagedKeys"></a>

```csharp
private void ResetAllowedManagedKeys()
```

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedResponseHeaders"></a>

```csharp
private void ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacRequestKeys"></a>

```csharp
private void ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacResponseKeys"></a>

```csharp
private void ResetAuditNonHmacResponseKeys()
```

##### `ResetBindpass` <a name="ResetBindpass" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetBindpass"></a>

```csharp
private void ResetBindpass()
```

##### `ResetBindpassWo` <a name="ResetBindpassWo" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetBindpassWo"></a>

```csharp
private void ResetBindpassWo()
```

##### `ResetBindpassWoVersion` <a name="ResetBindpassWoVersion" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetBindpassWoVersion"></a>

```csharp
private void ResetBindpassWoVersion()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetClientTlsCert` <a name="ResetClientTlsCert" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsCert"></a>

```csharp
private void ResetClientTlsCert()
```

##### `ResetClientTlsKey` <a name="ResetClientTlsKey" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsKey"></a>

```csharp
private void ResetClientTlsKey()
```

##### `ResetConnectionTimeout` <a name="ResetConnectionTimeout" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetConnectionTimeout"></a>

```csharp
private void ResetConnectionTimeout()
```

##### `ResetCredentialType` <a name="ResetCredentialType" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCredentialType"></a>

```csharp
private void ResetCredentialType()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```csharp
private void ResetDefaultLeaseTtlSeconds()
```

##### `ResetDelegatedAuthAccessors` <a name="ResetDelegatedAuthAccessors" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDelegatedAuthAccessors"></a>

```csharp
private void ResetDelegatedAuthAccessors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableAutomatedRotation"></a>

```csharp
private void ResetDisableAutomatedRotation()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableRemount"></a>

```csharp
private void ResetDisableRemount()
```

##### `ResetExternalEntropyAccess` <a name="ResetExternalEntropyAccess" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetExternalEntropyAccess"></a>

```csharp
private void ResetExternalEntropyAccess()
```

##### `ResetForceNoCache` <a name="ResetForceNoCache" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetForceNoCache"></a>

```csharp
private void ResetForceNoCache()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityTokenKey` <a name="ResetIdentityTokenKey" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetIdentityTokenKey"></a>

```csharp
private void ResetIdentityTokenKey()
```

##### `ResetInsecureTls` <a name="ResetInsecureTls" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetInsecureTls"></a>

```csharp
private void ResetInsecureTls()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetListingVisibility"></a>

```csharp
private void ResetListingVisibility()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetMaxLeaseTtlSeconds"></a>

```csharp
private void ResetMaxLeaseTtlSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPassthroughRequestHeaders"></a>

```csharp
private void ResetPassthroughRequestHeaders()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPasswordPolicy"></a>

```csharp
private void ResetPasswordPolicy()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPluginVersion` <a name="ResetPluginVersion" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPluginVersion"></a>

```csharp
private void ResetPluginVersion()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRequestTimeout"></a>

```csharp
private void ResetRequestTimeout()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRotationSchedule"></a>

```csharp
private void ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRotationWindow"></a>

```csharp
private void ResetRotationWindow()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetSealWrap` <a name="ResetSealWrap" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSealWrap"></a>

```csharp
private void ResetSealWrap()
```

##### `ResetSelfManaged` <a name="ResetSelfManaged" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSelfManaged"></a>

```csharp
private void ResetSelfManaged()
```

##### `ResetSkipStaticRoleImportRotation` <a name="ResetSkipStaticRoleImportRotation" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSkipStaticRoleImportRotation"></a>

```csharp
private void ResetSkipStaticRoleImportRotation()
```

##### `ResetStarttls` <a name="ResetStarttls" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetStarttls"></a>

```csharp
private void ResetStarttls()
```

##### `ResetUpndomain` <a name="ResetUpndomain" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUpndomain"></a>

```csharp
private void ResetUpndomain()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUserattr` <a name="ResetUserattr" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserattr"></a>

```csharp
private void ResetUserattr()
```

##### `ResetUserdn` <a name="ResetUserdn" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserdn"></a>

```csharp
private void ResetUserdn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LdapSecretBackend resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

LdapSecretBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

LdapSecretBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

LdapSecretBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

LdapSecretBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LdapSecretBackend resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LdapSecretBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LdapSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LdapSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeysInput">AllowedManagedKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddnInput">BinddnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassInput">BindpassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassWoInput">BindpassWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassWoVersionInput">BindpassWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCertInput">ClientTlsCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKeyInput">ClientTlsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeoutInput">ConnectionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.delegatedAuthAccessorsInput">DelegatedAuthAccessorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccessInput">ExternalEntropyAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forceNoCacheInput">ForceNoCacheInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.identityTokenKeyInput">IdentityTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTlsInput">InsecureTlsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.localInput">LocalInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pluginVersionInput">PluginVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationWindowInput">RotationWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrapInput">SealWrapInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.selfManagedInput">SelfManagedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.skipStaticRoleImportRotationInput">SkipStaticRoleImportRotationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttlsInput">StarttlsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomainInput">UpndomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattrInput">UserattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdnInput">UserdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddn">Binddn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpass">Bindpass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassWo">BindpassWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassWoVersion">BindpassWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCert">ClientTlsCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKey">ClientTlsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.credentialType">CredentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemount">DisableRemount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forceNoCache">ForceNoCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.identityTokenKey">IdentityTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTls">InsecureTls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.local">Local</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pluginVersion">PluginVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeout">RequestTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrap">SealWrap</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.selfManaged">SelfManaged</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.skipStaticRoleImportRotation">SkipStaticRoleImportRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttls">Starttls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomain">Upndomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattr">Userattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdn">Userdn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `AllowedManagedKeysInput`<sup>Optional</sup> <a name="AllowedManagedKeysInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeysInput"></a>

```csharp
public string[] AllowedManagedKeysInput { get; }
```

- *Type:* string[]

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedResponseHeadersInput"></a>

```csharp
public string[] AllowedResponseHeadersInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```csharp
public string[] AuditNonHmacRequestKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```csharp
public string[] AuditNonHmacResponseKeysInput { get; }
```

- *Type:* string[]

---

##### `BinddnInput`<sup>Optional</sup> <a name="BinddnInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddnInput"></a>

```csharp
public string BinddnInput { get; }
```

- *Type:* string

---

##### `BindpassInput`<sup>Optional</sup> <a name="BindpassInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassInput"></a>

```csharp
public string BindpassInput { get; }
```

- *Type:* string

---

##### `BindpassWoInput`<sup>Optional</sup> <a name="BindpassWoInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassWoInput"></a>

```csharp
public string BindpassWoInput { get; }
```

- *Type:* string

---

##### `BindpassWoVersionInput`<sup>Optional</sup> <a name="BindpassWoVersionInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassWoVersionInput"></a>

```csharp
public double BindpassWoVersionInput { get; }
```

- *Type:* double

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `ClientTlsCertInput`<sup>Optional</sup> <a name="ClientTlsCertInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCertInput"></a>

```csharp
public string ClientTlsCertInput { get; }
```

- *Type:* string

---

##### `ClientTlsKeyInput`<sup>Optional</sup> <a name="ClientTlsKeyInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKeyInput"></a>

```csharp
public string ClientTlsKeyInput { get; }
```

- *Type:* string

---

##### `ConnectionTimeoutInput`<sup>Optional</sup> <a name="ConnectionTimeoutInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeoutInput"></a>

```csharp
public double ConnectionTimeoutInput { get; }
```

- *Type:* double

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.credentialTypeInput"></a>

```csharp
public string CredentialTypeInput { get; }
```

- *Type:* string

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```csharp
public double DefaultLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `DelegatedAuthAccessorsInput`<sup>Optional</sup> <a name="DelegatedAuthAccessorsInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.delegatedAuthAccessorsInput"></a>

```csharp
public string[] DelegatedAuthAccessorsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableAutomatedRotationInput"></a>

```csharp
public bool|IResolvable DisableAutomatedRotationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemountInput"></a>

```csharp
public bool|IResolvable DisableRemountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalEntropyAccessInput`<sup>Optional</sup> <a name="ExternalEntropyAccessInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccessInput"></a>

```csharp
public bool|IResolvable ExternalEntropyAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceNoCacheInput`<sup>Optional</sup> <a name="ForceNoCacheInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forceNoCacheInput"></a>

```csharp
public bool|IResolvable ForceNoCacheInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityTokenKeyInput`<sup>Optional</sup> <a name="IdentityTokenKeyInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.identityTokenKeyInput"></a>

```csharp
public string IdentityTokenKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsecureTlsInput`<sup>Optional</sup> <a name="InsecureTlsInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTlsInput"></a>

```csharp
public bool|IResolvable InsecureTlsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.listingVisibilityInput"></a>

```csharp
public string ListingVisibilityInput { get; }
```

- *Type:* string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.localInput"></a>

```csharp
public bool|IResolvable LocalInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```csharp
public double MaxLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passthroughRequestHeadersInput"></a>

```csharp
public string[] PassthroughRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicyInput"></a>

```csharp
public string PasswordPolicyInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PluginVersionInput`<sup>Optional</sup> <a name="PluginVersionInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pluginVersionInput"></a>

```csharp
public string PluginVersionInput { get; }
```

- *Type:* string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeoutInput"></a>

```csharp
public double RequestTimeoutInput { get; }
```

- *Type:* double

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationPeriodInput"></a>

```csharp
public double RotationPeriodInput { get; }
```

- *Type:* double

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationScheduleInput"></a>

```csharp
public string RotationScheduleInput { get; }
```

- *Type:* string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationWindowInput"></a>

```csharp
public double RotationWindowInput { get; }
```

- *Type:* double

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SealWrapInput`<sup>Optional</sup> <a name="SealWrapInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrapInput"></a>

```csharp
public bool|IResolvable SealWrapInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SelfManagedInput`<sup>Optional</sup> <a name="SelfManagedInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.selfManagedInput"></a>

```csharp
public bool|IResolvable SelfManagedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SkipStaticRoleImportRotationInput`<sup>Optional</sup> <a name="SkipStaticRoleImportRotationInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.skipStaticRoleImportRotationInput"></a>

```csharp
public bool|IResolvable SkipStaticRoleImportRotationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StarttlsInput`<sup>Optional</sup> <a name="StarttlsInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttlsInput"></a>

```csharp
public bool|IResolvable StarttlsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UpndomainInput`<sup>Optional</sup> <a name="UpndomainInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomainInput"></a>

```csharp
public string UpndomainInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UserattrInput`<sup>Optional</sup> <a name="UserattrInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattrInput"></a>

```csharp
public string UserattrInput { get; }
```

- *Type:* string

---

##### `UserdnInput`<sup>Optional</sup> <a name="UserdnInput" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdnInput"></a>

```csharp
public string UserdnInput { get; }
```

- *Type:* string

---

##### `AllowedManagedKeys`<sup>Required</sup> <a name="AllowedManagedKeys" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; }
```

- *Type:* string[]

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; }
```

- *Type:* string[]

---

##### `Binddn`<sup>Required</sup> <a name="Binddn" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddn"></a>

```csharp
public string Binddn { get; }
```

- *Type:* string

---

##### `Bindpass`<sup>Required</sup> <a name="Bindpass" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpass"></a>

```csharp
public string Bindpass { get; }
```

- *Type:* string

---

##### `BindpassWo`<sup>Required</sup> <a name="BindpassWo" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassWo"></a>

```csharp
public string BindpassWo { get; }
```

- *Type:* string

---

##### `BindpassWoVersion`<sup>Required</sup> <a name="BindpassWoVersion" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassWoVersion"></a>

```csharp
public double BindpassWoVersion { get; }
```

- *Type:* double

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `ClientTlsCert`<sup>Required</sup> <a name="ClientTlsCert" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCert"></a>

```csharp
public string ClientTlsCert { get; }
```

- *Type:* string

---

##### `ClientTlsKey`<sup>Required</sup> <a name="ClientTlsKey" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKey"></a>

```csharp
public string ClientTlsKey { get; }
```

- *Type:* string

---

##### `ConnectionTimeout`<sup>Required</sup> <a name="ConnectionTimeout" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; }
```

- *Type:* double

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.credentialType"></a>

```csharp
public string CredentialType { get; }
```

- *Type:* string

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `DelegatedAuthAccessors`<sup>Required</sup> <a name="DelegatedAuthAccessors" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.delegatedAuthAccessors"></a>

```csharp
public string[] DelegatedAuthAccessors { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalEntropyAccess`<sup>Required</sup> <a name="ExternalEntropyAccess" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccess"></a>

```csharp
public bool|IResolvable ExternalEntropyAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceNoCache`<sup>Required</sup> <a name="ForceNoCache" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forceNoCache"></a>

```csharp
public bool|IResolvable ForceNoCache { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityTokenKey`<sup>Required</sup> <a name="IdentityTokenKey" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.identityTokenKey"></a>

```csharp
public string IdentityTokenKey { get; }
```

- *Type:* string

---

##### `InsecureTls`<sup>Required</sup> <a name="InsecureTls" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTls"></a>

```csharp
public bool|IResolvable InsecureTls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; }
```

- *Type:* string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.local"></a>

```csharp
public bool|IResolvable Local { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; }
```

- *Type:* string[]

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PluginVersion`<sup>Required</sup> <a name="PluginVersion" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pluginVersion"></a>

```csharp
public string PluginVersion { get; }
```

- *Type:* string

---

##### `RequestTimeout`<sup>Required</sup> <a name="RequestTimeout" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeout"></a>

```csharp
public double RequestTimeout { get; }
```

- *Type:* double

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; }
```

- *Type:* double

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; }
```

- *Type:* string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; }
```

- *Type:* double

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SealWrap`<sup>Required</sup> <a name="SealWrap" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrap"></a>

```csharp
public bool|IResolvable SealWrap { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SelfManaged`<sup>Required</sup> <a name="SelfManaged" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.selfManaged"></a>

```csharp
public bool|IResolvable SelfManaged { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SkipStaticRoleImportRotation`<sup>Required</sup> <a name="SkipStaticRoleImportRotation" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.skipStaticRoleImportRotation"></a>

```csharp
public bool|IResolvable SkipStaticRoleImportRotation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Starttls`<sup>Required</sup> <a name="Starttls" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttls"></a>

```csharp
public bool|IResolvable Starttls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Upndomain`<sup>Required</sup> <a name="Upndomain" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomain"></a>

```csharp
public string Upndomain { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Userattr`<sup>Required</sup> <a name="Userattr" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattr"></a>

```csharp
public string Userattr { get; }
```

- *Type:* string

---

##### `Userdn`<sup>Required</sup> <a name="Userdn" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdn"></a>

```csharp
public string Userdn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendConfig <a name="LdapSecretBackendConfig" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new LdapSecretBackendConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Binddn,
    string[] AllowedManagedKeys = null,
    string[] AllowedResponseHeaders = null,
    string[] AuditNonHmacRequestKeys = null,
    string[] AuditNonHmacResponseKeys = null,
    string Bindpass = null,
    string BindpassWo = null,
    double BindpassWoVersion = null,
    string Certificate = null,
    string ClientTlsCert = null,
    string ClientTlsKey = null,
    double ConnectionTimeout = null,
    string CredentialType = null,
    double DefaultLeaseTtlSeconds = null,
    string[] DelegatedAuthAccessors = null,
    string Description = null,
    bool|IResolvable DisableAutomatedRotation = null,
    bool|IResolvable DisableRemount = null,
    bool|IResolvable ExternalEntropyAccess = null,
    bool|IResolvable ForceNoCache = null,
    string Id = null,
    string IdentityTokenKey = null,
    bool|IResolvable InsecureTls = null,
    string ListingVisibility = null,
    bool|IResolvable Local = null,
    double MaxLeaseTtlSeconds = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    string[] PassthroughRequestHeaders = null,
    string PasswordPolicy = null,
    string Path = null,
    string PluginVersion = null,
    double RequestTimeout = null,
    double RotationPeriod = null,
    string RotationSchedule = null,
    double RotationWindow = null,
    string Schema = null,
    bool|IResolvable SealWrap = null,
    bool|IResolvable SelfManaged = null,
    bool|IResolvable SkipStaticRoleImportRotation = null,
    bool|IResolvable Starttls = null,
    string Upndomain = null,
    string Url = null,
    string Userattr = null,
    string Userdn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.binddn">Binddn</a></code> | <code>string</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpass">Bindpass</a></code> | <code>string</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpassWo">BindpassWo</a></code> | <code>string</code> | Write-only LDAP password for searching for the user DN. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpassWoVersion">BindpassWoVersion</a></code> | <code>double</code> | Version counter for write-only bind password. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.certificate">Certificate</a></code> | <code>string</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsCert">ClientTlsCert</a></code> | <code>string</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsKey">ClientTlsKey</a></code> | <code>string</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connectionTimeout">ConnectionTimeout</a></code> | <code>double</code> | Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.credentialType">CredentialType</a></code> | <code>string</code> | The type of credential to manage. Options include: 'password', 'phrase'. Defaults to 'password'. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.description">Description</a></code> | <code>string</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forceNoCache">ForceNoCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.identityTokenKey">IdentityTokenKey</a></code> | <code>string</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.insecureTls">InsecureTls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.local">Local</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.path">Path</a></code> | <code>string</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.pluginVersion">PluginVersion</a></code> | <code>string</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.requestTimeout">RequestTimeout</a></code> | <code>double</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.schema">Schema</a></code> | <code>string</code> | The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.sealWrap">SealWrap</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.selfManaged">SelfManaged</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, Vault performs rotations by authenticating as this account using its current password (no privileged bind DN). |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.skipStaticRoleImportRotation">SkipStaticRoleImportRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Skip rotation of static role secrets on import. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.starttls">Starttls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.upndomain">Upndomain</a></code> | <code>string</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.url">Url</a></code> | <code>string</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userattr">Userattr</a></code> | <code>string</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userdn">Userdn</a></code> | <code>string</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Binddn`<sup>Required</sup> <a name="Binddn" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.binddn"></a>

```csharp
public string Binddn { get; set; }
```

- *Type:* string

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#binddn LdapSecretBackend#binddn}

---

##### `AllowedManagedKeys`<sup>Optional</sup> <a name="AllowedManagedKeys" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; set; }
```

- *Type:* string[]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#allowed_managed_keys LdapSecretBackend#allowed_managed_keys}

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#allowed_response_headers LdapSecretBackend#allowed_response_headers}

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#audit_non_hmac_request_keys LdapSecretBackend#audit_non_hmac_request_keys}

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#audit_non_hmac_response_keys LdapSecretBackend#audit_non_hmac_response_keys}

---

##### `Bindpass`<sup>Optional</sup> <a name="Bindpass" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpass"></a>

```csharp
public string Bindpass { get; set; }
```

- *Type:* string

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#bindpass LdapSecretBackend#bindpass}

---

##### `BindpassWo`<sup>Optional</sup> <a name="BindpassWo" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpassWo"></a>

```csharp
public string BindpassWo { get; set; }
```

- *Type:* string

Write-only LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#bindpass_wo LdapSecretBackend#bindpass_wo}

---

##### `BindpassWoVersion`<sup>Optional</sup> <a name="BindpassWoVersion" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpassWoVersion"></a>

```csharp
public double BindpassWoVersion { get; set; }
```

- *Type:* double

Version counter for write-only bind password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#bindpass_wo_version LdapSecretBackend#bindpass_wo_version}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#certificate LdapSecretBackend#certificate}

---

##### `ClientTlsCert`<sup>Optional</sup> <a name="ClientTlsCert" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsCert"></a>

```csharp
public string ClientTlsCert { get; set; }
```

- *Type:* string

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#client_tls_cert LdapSecretBackend#client_tls_cert}

---

##### `ClientTlsKey`<sup>Optional</sup> <a name="ClientTlsKey" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsKey"></a>

```csharp
public string ClientTlsKey { get; set; }
```

- *Type:* string

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#client_tls_key LdapSecretBackend#client_tls_key}

---

##### `ConnectionTimeout`<sup>Optional</sup> <a name="ConnectionTimeout" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connectionTimeout"></a>

```csharp
public double ConnectionTimeout { get; set; }
```

- *Type:* double

Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#connection_timeout LdapSecretBackend#connection_timeout}

---

##### `CredentialType`<sup>Optional</sup> <a name="CredentialType" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.credentialType"></a>

```csharp
public string CredentialType { get; set; }
```

- *Type:* string

The type of credential to manage. Options include: 'password', 'phrase'. Defaults to 'password'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#credential_type LdapSecretBackend#credential_type}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; set; }
```

- *Type:* double

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#default_lease_ttl_seconds LdapSecretBackend#default_lease_ttl_seconds}

---

##### `DelegatedAuthAccessors`<sup>Optional</sup> <a name="DelegatedAuthAccessors" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.delegatedAuthAccessors"></a>

```csharp
public string[] DelegatedAuthAccessors { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#delegated_auth_accessors LdapSecretBackend#delegated_auth_accessors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#description LdapSecretBackend#description}

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#disable_automated_rotation LdapSecretBackend#disable_automated_rotation}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#disable_remount LdapSecretBackend#disable_remount}

---

##### `ExternalEntropyAccess`<sup>Optional</sup> <a name="ExternalEntropyAccess" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.externalEntropyAccess"></a>

```csharp
public bool|IResolvable ExternalEntropyAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#external_entropy_access LdapSecretBackend#external_entropy_access}

---

##### `ForceNoCache`<sup>Optional</sup> <a name="ForceNoCache" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forceNoCache"></a>

```csharp
public bool|IResolvable ForceNoCache { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#force_no_cache LdapSecretBackend#force_no_cache}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenKey`<sup>Optional</sup> <a name="IdentityTokenKey" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.identityTokenKey"></a>

```csharp
public string IdentityTokenKey { get; set; }
```

- *Type:* string

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#identity_token_key LdapSecretBackend#identity_token_key}

---

##### `InsecureTls`<sup>Optional</sup> <a name="InsecureTls" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.insecureTls"></a>

```csharp
public bool|IResolvable InsecureTls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#insecure_tls LdapSecretBackend#insecure_tls}

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; set; }
```

- *Type:* string

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#listing_visibility LdapSecretBackend#listing_visibility}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.local"></a>

```csharp
public bool|IResolvable Local { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#local LdapSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; set; }
```

- *Type:* double

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#max_lease_ttl_seconds LdapSecretBackend#max_lease_ttl_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#namespace LdapSecretBackend#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#options LdapSecretBackend#options}

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#passthrough_request_headers LdapSecretBackend#passthrough_request_headers}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; set; }
```

- *Type:* string

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#password_policy LdapSecretBackend#password_policy}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#path LdapSecretBackend#path}

---

##### `PluginVersion`<sup>Optional</sup> <a name="PluginVersion" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.pluginVersion"></a>

```csharp
public string PluginVersion { get; set; }
```

- *Type:* string

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#plugin_version LdapSecretBackend#plugin_version}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.requestTimeout"></a>

```csharp
public double RequestTimeout { get; set; }
```

- *Type:* double

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#request_timeout LdapSecretBackend#request_timeout}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; set; }
```

- *Type:* double

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#rotation_period LdapSecretBackend#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; set; }
```

- *Type:* string

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#rotation_schedule LdapSecretBackend#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; set; }
```

- *Type:* double

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#rotation_window LdapSecretBackend#rotation_window}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#schema LdapSecretBackend#schema}

---

##### `SealWrap`<sup>Optional</sup> <a name="SealWrap" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.sealWrap"></a>

```csharp
public bool|IResolvable SealWrap { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#seal_wrap LdapSecretBackend#seal_wrap}

---

##### `SelfManaged`<sup>Optional</sup> <a name="SelfManaged" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.selfManaged"></a>

```csharp
public bool|IResolvable SelfManaged { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, Vault performs rotations by authenticating as this account using its current password (no privileged bind DN).

Immutable after creation. Requires password on create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#self_managed LdapSecretBackend#self_managed}

---

##### `SkipStaticRoleImportRotation`<sup>Optional</sup> <a name="SkipStaticRoleImportRotation" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.skipStaticRoleImportRotation"></a>

```csharp
public bool|IResolvable SkipStaticRoleImportRotation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Skip rotation of static role secrets on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#skip_static_role_import_rotation LdapSecretBackend#skip_static_role_import_rotation}

---

##### `Starttls`<sup>Optional</sup> <a name="Starttls" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.starttls"></a>

```csharp
public bool|IResolvable Starttls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#starttls LdapSecretBackend#starttls}

---

##### `Upndomain`<sup>Optional</sup> <a name="Upndomain" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.upndomain"></a>

```csharp
public string Upndomain { get; set; }
```

- *Type:* string

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#upndomain LdapSecretBackend#upndomain}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#url LdapSecretBackend#url}

---

##### `Userattr`<sup>Optional</sup> <a name="Userattr" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userattr"></a>

```csharp
public string Userattr { get; set; }
```

- *Type:* string

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#userattr LdapSecretBackend#userattr}

---

##### `Userdn`<sup>Optional</sup> <a name="Userdn" id="@cdktn/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userdn"></a>

```csharp
public string Userdn { get; set; }
```

- *Type:* string

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/ldap_secret_backend#userdn LdapSecretBackend#userdn}

---



