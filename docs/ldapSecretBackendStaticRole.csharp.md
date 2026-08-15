# `ldapSecretBackendStaticRole` Submodule <a name="`ldapSecretBackendStaticRole` Submodule" id="@cdktn/provider-vault.ldapSecretBackendStaticRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackendStaticRole <a name="LdapSecretBackendStaticRole" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role vault_ldap_secret_backend_static_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new LdapSecretBackendStaticRole(Construct Scope, string Id, LdapSecretBackendStaticRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig">LdapSecretBackendStaticRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig">LdapSecretBackendStaticRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetAutoUnlock">ResetAutoUnlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetDn">ResetDn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetMount">ResetMount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetPasswordWo">ResetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetPasswordWoVersion">ResetPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotateOnRead">ResetRotateOnRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotateOnReadCooldown">ResetRotateOnReadCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationPolicy">ResetRotationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetSkipImportRotation">ResetSkipImportRotation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutoUnlock` <a name="ResetAutoUnlock" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetAutoUnlock"></a>

```csharp
private void ResetAutoUnlock()
```

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetDisableAutomatedRotation"></a>

```csharp
private void ResetDisableAutomatedRotation()
```

##### `ResetDn` <a name="ResetDn" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetDn"></a>

```csharp
private void ResetDn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMount` <a name="ResetMount" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetMount"></a>

```csharp
private void ResetMount()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetPasswordPolicy"></a>

```csharp
private void ResetPasswordPolicy()
```

##### `ResetPasswordWo` <a name="ResetPasswordWo" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetPasswordWo"></a>

```csharp
private void ResetPasswordWo()
```

##### `ResetPasswordWoVersion` <a name="ResetPasswordWoVersion" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetPasswordWoVersion"></a>

```csharp
private void ResetPasswordWoVersion()
```

##### `ResetRotateOnRead` <a name="ResetRotateOnRead" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotateOnRead"></a>

```csharp
private void ResetRotateOnRead()
```

##### `ResetRotateOnReadCooldown` <a name="ResetRotateOnReadCooldown" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotateOnReadCooldown"></a>

```csharp
private void ResetRotateOnReadCooldown()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

##### `ResetRotationPolicy` <a name="ResetRotationPolicy" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationPolicy"></a>

```csharp
private void ResetRotationPolicy()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationSchedule"></a>

```csharp
private void ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetRotationWindow"></a>

```csharp
private void ResetRotationWindow()
```

##### `ResetSkipImportRotation` <a name="ResetSkipImportRotation" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetSkipImportRotation"></a>

```csharp
private void ResetSkipImportRotation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LdapSecretBackendStaticRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

LdapSecretBackendStaticRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

LdapSecretBackendStaticRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

LdapSecretBackendStaticRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

LdapSecretBackendStaticRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LdapSecretBackendStaticRole resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LdapSecretBackendStaticRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LdapSecretBackendStaticRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LdapSecretBackendStaticRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.autoUnlockInput">AutoUnlockInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dnInput">DnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWoInput">PasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWoVersionInput">PasswordWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotateOnReadCooldownInput">RotateOnReadCooldownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotateOnReadInput">RotateOnReadInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPolicyInput">RotationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationWindowInput">RotationWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.skipImportRotationInput">SkipImportRotationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.autoUnlock">AutoUnlock</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dn">Dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWo">PasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotateOnRead">RotateOnRead</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotateOnReadCooldown">RotateOnReadCooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPolicy">RotationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.skipImportRotation">SkipImportRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoUnlockInput`<sup>Optional</sup> <a name="AutoUnlockInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.autoUnlockInput"></a>

```csharp
public bool|IResolvable AutoUnlockInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.disableAutomatedRotationInput"></a>

```csharp
public bool|IResolvable DisableAutomatedRotationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DnInput`<sup>Optional</sup> <a name="DnInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dnInput"></a>

```csharp
public string DnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordPolicyInput"></a>

```csharp
public string PasswordPolicyInput { get; }
```

- *Type:* string

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWoInput"></a>

```csharp
public string PasswordWoInput { get; }
```

- *Type:* string

---

##### `PasswordWoVersionInput`<sup>Optional</sup> <a name="PasswordWoVersionInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWoVersionInput"></a>

```csharp
public double PasswordWoVersionInput { get; }
```

- *Type:* double

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `RotateOnReadCooldownInput`<sup>Optional</sup> <a name="RotateOnReadCooldownInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotateOnReadCooldownInput"></a>

```csharp
public double RotateOnReadCooldownInput { get; }
```

- *Type:* double

---

##### `RotateOnReadInput`<sup>Optional</sup> <a name="RotateOnReadInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotateOnReadInput"></a>

```csharp
public bool|IResolvable RotateOnReadInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriodInput"></a>

```csharp
public double RotationPeriodInput { get; }
```

- *Type:* double

---

##### `RotationPolicyInput`<sup>Optional</sup> <a name="RotationPolicyInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPolicyInput"></a>

```csharp
public string RotationPolicyInput { get; }
```

- *Type:* string

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationScheduleInput"></a>

```csharp
public string RotationScheduleInput { get; }
```

- *Type:* string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationWindowInput"></a>

```csharp
public double RotationWindowInput { get; }
```

- *Type:* double

---

##### `SkipImportRotationInput`<sup>Optional</sup> <a name="SkipImportRotationInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.skipImportRotationInput"></a>

```csharp
public bool|IResolvable SkipImportRotationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `AutoUnlock`<sup>Required</sup> <a name="AutoUnlock" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.autoUnlock"></a>

```csharp
public bool|IResolvable AutoUnlock { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Dn`<sup>Required</sup> <a name="Dn" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dn"></a>

```csharp
public string Dn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; }
```

- *Type:* string

---

##### ~~`PasswordWo`~~<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string PasswordWo { get; }
```

- *Type:* string

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.passwordWoVersion"></a>

```csharp
public double PasswordWoVersion { get; }
```

- *Type:* double

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `RotateOnRead`<sup>Required</sup> <a name="RotateOnRead" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotateOnRead"></a>

```csharp
public bool|IResolvable RotateOnRead { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RotateOnReadCooldown`<sup>Required</sup> <a name="RotateOnReadCooldown" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotateOnReadCooldown"></a>

```csharp
public double RotateOnReadCooldown { get; }
```

- *Type:* double

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; }
```

- *Type:* double

---

##### `RotationPolicy`<sup>Required</sup> <a name="RotationPolicy" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPolicy"></a>

```csharp
public string RotationPolicy { get; }
```

- *Type:* string

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; }
```

- *Type:* string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; }
```

- *Type:* double

---

##### `SkipImportRotation`<sup>Required</sup> <a name="SkipImportRotation" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.skipImportRotation"></a>

```csharp
public bool|IResolvable SkipImportRotation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendStaticRoleConfig <a name="LdapSecretBackendStaticRoleConfig" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new LdapSecretBackendStaticRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RoleName,
    string Username,
    bool|IResolvable AutoUnlock = null,
    bool|IResolvable DisableAutomatedRotation = null,
    string Dn = null,
    string Id = null,
    string Mount = null,
    string Namespace = null,
    string PasswordPolicy = null,
    string PasswordWo = null,
    double PasswordWoVersion = null,
    bool|IResolvable RotateOnRead = null,
    double RotateOnReadCooldown = null,
    double RotationPeriod = null,
    string RotationPolicy = null,
    string RotationSchedule = null,
    double RotationWindow = null,
    bool|IResolvable SkipImportRotation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.roleName">RoleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.username">Username</a></code> | <code>string</code> | The username of the existing LDAP entry to manage password rotation for. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.autoUnlock">AutoUnlock</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Overrides the mount-level auto_unlock setting for this role. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dn">Dn</a></code> | <code>string</code> | Distinguished name (DN) of the existing LDAP entry to manage password rotation for. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#id LdapSecretBackendStaticRole#id}. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.mount">Mount</a></code> | <code>string</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | Name of the password policy to use to generate passwords for this role. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.passwordWo">PasswordWo</a></code> | <code>string</code> | Password for the static role. This is required for Vault to manage an existing account and enable rotation. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>double</code> | Version counter for write-only password. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotateOnRead">RotateOnRead</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, credentials are rotated on each read. Overrides the engine-level default when set. Requires Vault Enterprise ≥ 2.2.0. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotateOnReadCooldown">RotateOnReadCooldown</a></code> | <code>double</code> | Minimum seconds between rotate-on-read rotations for this role. Overrides the engine-level default when set. Requires Vault Enterprise ≥ 2.2.0. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationPolicy">RotationPolicy</a></code> | <code>string</code> | The rotation policy to use for this credential. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.skipImportRotation">SkipImportRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Skip rotation of the password on import. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#role_name LdapSecretBackendStaticRole#role_name}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username of the existing LDAP entry to manage password rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#username LdapSecretBackendStaticRole#username}

---

##### `AutoUnlock`<sup>Optional</sup> <a name="AutoUnlock" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.autoUnlock"></a>

```csharp
public bool|IResolvable AutoUnlock { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Overrides the mount-level auto_unlock setting for this role.

When true, Vault unlocks the account automatically after a successful rotation. When false, disables automatic unlock even if the mount enables it. When unset, inherits the mount-level setting. Currently only the Active Directory schema is supported. Requires Vault 2.2.0+

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#auto_unlock LdapSecretBackendStaticRole#auto_unlock}

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#disable_automated_rotation LdapSecretBackendStaticRole#disable_automated_rotation}

---

##### `Dn`<sup>Optional</sup> <a name="Dn" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dn"></a>

```csharp
public string Dn { get; set; }
```

- *Type:* string

Distinguished name (DN) of the existing LDAP entry to manage password rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#dn LdapSecretBackendStaticRole#dn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#id LdapSecretBackendStaticRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#mount LdapSecretBackendStaticRole#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#namespace LdapSecretBackendStaticRole#namespace}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; set; }
```

- *Type:* string

Name of the password policy to use to generate passwords for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#password_policy LdapSecretBackendStaticRole#password_policy}

---

##### `PasswordWo`<sup>Optional</sup> <a name="PasswordWo" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.passwordWo"></a>

```csharp
public string PasswordWo { get; set; }
```

- *Type:* string

Password for the static role. This is required for Vault to manage an existing account and enable rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#password_wo LdapSecretBackendStaticRole#password_wo}

---

##### `PasswordWoVersion`<sup>Optional</sup> <a name="PasswordWoVersion" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.passwordWoVersion"></a>

```csharp
public double PasswordWoVersion { get; set; }
```

- *Type:* double

Version counter for write-only password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#password_wo_version LdapSecretBackendStaticRole#password_wo_version}

---

##### `RotateOnRead`<sup>Optional</sup> <a name="RotateOnRead" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotateOnRead"></a>

```csharp
public bool|IResolvable RotateOnRead { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, credentials are rotated on each read. Overrides the engine-level default when set. Requires Vault Enterprise ≥ 2.2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#rotate_on_read LdapSecretBackendStaticRole#rotate_on_read}

---

##### `RotateOnReadCooldown`<sup>Optional</sup> <a name="RotateOnReadCooldown" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotateOnReadCooldown"></a>

```csharp
public double RotateOnReadCooldown { get; set; }
```

- *Type:* double

Minimum seconds between rotate-on-read rotations for this role. Overrides the engine-level default when set. Requires Vault Enterprise ≥ 2.2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#rotate_on_read_cooldown LdapSecretBackendStaticRole#rotate_on_read_cooldown}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; set; }
```

- *Type:* double

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#rotation_period LdapSecretBackendStaticRole#rotation_period}

---

##### `RotationPolicy`<sup>Optional</sup> <a name="RotationPolicy" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationPolicy"></a>

```csharp
public string RotationPolicy { get; set; }
```

- *Type:* string

The rotation policy to use for this credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#rotation_policy LdapSecretBackendStaticRole#rotation_policy}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; set; }
```

- *Type:* string

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#rotation_schedule LdapSecretBackendStaticRole#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; set; }
```

- *Type:* double

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#rotation_window LdapSecretBackendStaticRole#rotation_window}

---

##### `SkipImportRotation`<sup>Optional</sup> <a name="SkipImportRotation" id="@cdktn/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.skipImportRotation"></a>

```csharp
public bool|IResolvable SkipImportRotation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Skip rotation of the password on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/ldap_secret_backend_static_role#skip_import_rotation LdapSecretBackendStaticRole#skip_import_rotation}

---



