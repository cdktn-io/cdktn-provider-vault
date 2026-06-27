# `nomadSecretBackend` Submodule <a name="`nomadSecretBackend` Submodule" id="@cdktn/provider-vault.nomadSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NomadSecretBackend <a name="NomadSecretBackend" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend vault_nomad_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new NomadSecretBackend(Construct Scope, string Id, NomadSecretBackendConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig">NomadSecretBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig">NomadSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAllowedManagedKeys">ResetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetCaCert">ResetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientCert">ResetClientCert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientKeyWo">ResetClientKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientKeyWoVersion">ResetClientKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDelegatedAuthAccessors">ResetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetExternalEntropyAccess">ResetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetForceNoCache">ResetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetIdentityTokenKey">ResetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxTokenNameLength">ResetMaxTokenNameLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetPluginVersion">ResetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetSealWrap">ResetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetTokenWo">ResetTokenWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetTokenWoVersion">ResetTokenWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetAllowedManagedKeys` <a name="ResetAllowedManagedKeys" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAllowedManagedKeys"></a>

```csharp
private void ResetAllowedManagedKeys()
```

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAllowedResponseHeaders"></a>

```csharp
private void ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAuditNonHmacRequestKeys"></a>

```csharp
private void ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAuditNonHmacResponseKeys"></a>

```csharp
private void ResetAuditNonHmacResponseKeys()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetCaCert` <a name="ResetCaCert" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetCaCert"></a>

```csharp
private void ResetCaCert()
```

##### `ResetClientCert` <a name="ResetClientCert" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientCert"></a>

```csharp
private void ResetClientCert()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientKey"></a>

```csharp
private void ResetClientKey()
```

##### `ResetClientKeyWo` <a name="ResetClientKeyWo" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientKeyWo"></a>

```csharp
private void ResetClientKeyWo()
```

##### `ResetClientKeyWoVersion` <a name="ResetClientKeyWoVersion" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientKeyWoVersion"></a>

```csharp
private void ResetClientKeyWoVersion()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```csharp
private void ResetDefaultLeaseTtlSeconds()
```

##### `ResetDelegatedAuthAccessors` <a name="ResetDelegatedAuthAccessors" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDelegatedAuthAccessors"></a>

```csharp
private void ResetDelegatedAuthAccessors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDisableRemount"></a>

```csharp
private void ResetDisableRemount()
```

##### `ResetExternalEntropyAccess` <a name="ResetExternalEntropyAccess" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetExternalEntropyAccess"></a>

```csharp
private void ResetExternalEntropyAccess()
```

##### `ResetForceNoCache` <a name="ResetForceNoCache" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetForceNoCache"></a>

```csharp
private void ResetForceNoCache()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityTokenKey` <a name="ResetIdentityTokenKey" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetIdentityTokenKey"></a>

```csharp
private void ResetIdentityTokenKey()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetListingVisibility"></a>

```csharp
private void ResetListingVisibility()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxLeaseTtlSeconds"></a>

```csharp
private void ResetMaxLeaseTtlSeconds()
```

##### `ResetMaxTokenNameLength` <a name="ResetMaxTokenNameLength" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxTokenNameLength"></a>

```csharp
private void ResetMaxTokenNameLength()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetPassthroughRequestHeaders"></a>

```csharp
private void ResetPassthroughRequestHeaders()
```

##### `ResetPluginVersion` <a name="ResetPluginVersion" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetPluginVersion"></a>

```csharp
private void ResetPluginVersion()
```

##### `ResetSealWrap` <a name="ResetSealWrap" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetSealWrap"></a>

```csharp
private void ResetSealWrap()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetTokenWo` <a name="ResetTokenWo" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetTokenWo"></a>

```csharp
private void ResetTokenWo()
```

##### `ResetTokenWoVersion` <a name="ResetTokenWoVersion" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetTokenWoVersion"></a>

```csharp
private void ResetTokenWoVersion()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NomadSecretBackend resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

NomadSecretBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

NomadSecretBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

NomadSecretBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

NomadSecretBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NomadSecretBackend resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NomadSecretBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NomadSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NomadSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedManagedKeysInput">AllowedManagedKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.caCertInput">CaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientCertInput">ClientCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyInput">ClientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyWoInput">ClientKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyWoVersionInput">ClientKeyWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.delegatedAuthAccessorsInput">DelegatedAuthAccessorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.externalEntropyAccessInput">ExternalEntropyAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forceNoCacheInput">ForceNoCacheInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.identityTokenKeyInput">IdentityTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.localInput">LocalInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTokenNameLengthInput">MaxTokenNameLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTtlInput">MaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.pluginVersionInput">PluginVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.sealWrapInput">SealWrapInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenWoInput">TokenWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenWoVersionInput">TokenWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.caCert">CaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientCert">ClientCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKey">ClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyWo">ClientKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyWoVersion">ClientKeyWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.disableRemount">DisableRemount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forceNoCache">ForceNoCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.identityTokenKey">IdentityTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.local">Local</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTokenNameLength">MaxTokenNameLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.pluginVersion">PluginVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.sealWrap">SealWrap</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenWo">TokenWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenWoVersion">TokenWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `AllowedManagedKeysInput`<sup>Optional</sup> <a name="AllowedManagedKeysInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedManagedKeysInput"></a>

```csharp
public string[] AllowedManagedKeysInput { get; }
```

- *Type:* string[]

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedResponseHeadersInput"></a>

```csharp
public string[] AllowedResponseHeadersInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```csharp
public string[] AuditNonHmacRequestKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```csharp
public string[] AuditNonHmacResponseKeysInput { get; }
```

- *Type:* string[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `CaCertInput`<sup>Optional</sup> <a name="CaCertInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.caCertInput"></a>

```csharp
public string CaCertInput { get; }
```

- *Type:* string

---

##### `ClientCertInput`<sup>Optional</sup> <a name="ClientCertInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientCertInput"></a>

```csharp
public string ClientCertInput { get; }
```

- *Type:* string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyInput"></a>

```csharp
public string ClientKeyInput { get; }
```

- *Type:* string

---

##### `ClientKeyWoInput`<sup>Optional</sup> <a name="ClientKeyWoInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyWoInput"></a>

```csharp
public string ClientKeyWoInput { get; }
```

- *Type:* string

---

##### `ClientKeyWoVersionInput`<sup>Optional</sup> <a name="ClientKeyWoVersionInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyWoVersionInput"></a>

```csharp
public double ClientKeyWoVersionInput { get; }
```

- *Type:* double

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```csharp
public double DefaultLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `DelegatedAuthAccessorsInput`<sup>Optional</sup> <a name="DelegatedAuthAccessorsInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.delegatedAuthAccessorsInput"></a>

```csharp
public string[] DelegatedAuthAccessorsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.disableRemountInput"></a>

```csharp
public bool|IResolvable DisableRemountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalEntropyAccessInput`<sup>Optional</sup> <a name="ExternalEntropyAccessInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.externalEntropyAccessInput"></a>

```csharp
public bool|IResolvable ExternalEntropyAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceNoCacheInput`<sup>Optional</sup> <a name="ForceNoCacheInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forceNoCacheInput"></a>

```csharp
public bool|IResolvable ForceNoCacheInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityTokenKeyInput`<sup>Optional</sup> <a name="IdentityTokenKeyInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.identityTokenKeyInput"></a>

```csharp
public string IdentityTokenKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.listingVisibilityInput"></a>

```csharp
public string ListingVisibilityInput { get; }
```

- *Type:* string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.localInput"></a>

```csharp
public bool|IResolvable LocalInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```csharp
public double MaxLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `MaxTokenNameLengthInput`<sup>Optional</sup> <a name="MaxTokenNameLengthInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTokenNameLengthInput"></a>

```csharp
public double MaxTokenNameLengthInput { get; }
```

- *Type:* double

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTtlInput"></a>

```csharp
public double MaxTtlInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.passthroughRequestHeadersInput"></a>

```csharp
public string[] PassthroughRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `PluginVersionInput`<sup>Optional</sup> <a name="PluginVersionInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.pluginVersionInput"></a>

```csharp
public string PluginVersionInput { get; }
```

- *Type:* string

---

##### `SealWrapInput`<sup>Optional</sup> <a name="SealWrapInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.sealWrapInput"></a>

```csharp
public bool|IResolvable SealWrapInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `TokenWoInput`<sup>Optional</sup> <a name="TokenWoInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenWoInput"></a>

```csharp
public string TokenWoInput { get; }
```

- *Type:* string

---

##### `TokenWoVersionInput`<sup>Optional</sup> <a name="TokenWoVersionInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenWoVersionInput"></a>

```csharp
public double TokenWoVersionInput { get; }
```

- *Type:* double

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `AllowedManagedKeys`<sup>Required</sup> <a name="AllowedManagedKeys" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; }
```

- *Type:* string[]

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; }
```

- *Type:* string[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `CaCert`<sup>Required</sup> <a name="CaCert" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.caCert"></a>

```csharp
public string CaCert { get; }
```

- *Type:* string

---

##### `ClientCert`<sup>Required</sup> <a name="ClientCert" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientCert"></a>

```csharp
public string ClientCert { get; }
```

- *Type:* string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKey"></a>

```csharp
public string ClientKey { get; }
```

- *Type:* string

---

##### `ClientKeyWo`<sup>Required</sup> <a name="ClientKeyWo" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyWo"></a>

```csharp
public string ClientKeyWo { get; }
```

- *Type:* string

---

##### `ClientKeyWoVersion`<sup>Required</sup> <a name="ClientKeyWoVersion" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyWoVersion"></a>

```csharp
public double ClientKeyWoVersion { get; }
```

- *Type:* double

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `DelegatedAuthAccessors`<sup>Required</sup> <a name="DelegatedAuthAccessors" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.delegatedAuthAccessors"></a>

```csharp
public string[] DelegatedAuthAccessors { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalEntropyAccess`<sup>Required</sup> <a name="ExternalEntropyAccess" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.externalEntropyAccess"></a>

```csharp
public bool|IResolvable ExternalEntropyAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceNoCache`<sup>Required</sup> <a name="ForceNoCache" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forceNoCache"></a>

```csharp
public bool|IResolvable ForceNoCache { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityTokenKey`<sup>Required</sup> <a name="IdentityTokenKey" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.identityTokenKey"></a>

```csharp
public string IdentityTokenKey { get; }
```

- *Type:* string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; }
```

- *Type:* string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.local"></a>

```csharp
public bool|IResolvable Local { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `MaxTokenNameLength`<sup>Required</sup> <a name="MaxTokenNameLength" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTokenNameLength"></a>

```csharp
public double MaxTokenNameLength { get; }
```

- *Type:* double

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; }
```

- *Type:* string[]

---

##### `PluginVersion`<sup>Required</sup> <a name="PluginVersion" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.pluginVersion"></a>

```csharp
public string PluginVersion { get; }
```

- *Type:* string

---

##### `SealWrap`<sup>Required</sup> <a name="SealWrap" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.sealWrap"></a>

```csharp
public bool|IResolvable SealWrap { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `TokenWo`<sup>Required</sup> <a name="TokenWo" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenWo"></a>

```csharp
public string TokenWo { get; }
```

- *Type:* string

---

##### `TokenWoVersion`<sup>Required</sup> <a name="TokenWoVersion" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenWoVersion"></a>

```csharp
public double TokenWoVersion { get; }
```

- *Type:* double

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NomadSecretBackendConfig <a name="NomadSecretBackendConfig" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new NomadSecretBackendConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Address = null,
    string[] AllowedManagedKeys = null,
    string[] AllowedResponseHeaders = null,
    string[] AuditNonHmacRequestKeys = null,
    string[] AuditNonHmacResponseKeys = null,
    string Backend = null,
    string CaCert = null,
    string ClientCert = null,
    string ClientKey = null,
    string ClientKeyWo = null,
    double ClientKeyWoVersion = null,
    double DefaultLeaseTtlSeconds = null,
    string[] DelegatedAuthAccessors = null,
    string Description = null,
    bool|IResolvable DisableRemount = null,
    bool|IResolvable ExternalEntropyAccess = null,
    bool|IResolvable ForceNoCache = null,
    string Id = null,
    string IdentityTokenKey = null,
    string ListingVisibility = null,
    bool|IResolvable Local = null,
    double MaxLeaseTtlSeconds = null,
    double MaxTokenNameLength = null,
    double MaxTtl = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    string[] PassthroughRequestHeaders = null,
    string PluginVersion = null,
    bool|IResolvable SealWrap = null,
    string Token = null,
    string TokenWo = null,
    double TokenWoVersion = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.address">Address</a></code> | <code>string</code> | Specifies the address of the Nomad instance, provided as "protocol://host:port" like "http://127.0.0.1:4646". |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.backend">Backend</a></code> | <code>string</code> | The mount path for the Nomad backend. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.caCert">CaCert</a></code> | <code>string</code> | CA certificate to use when verifying Nomad server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientCert">ClientCert</a></code> | <code>string</code> | Client certificate used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientKey">ClientKey</a></code> | <code>string</code> | Client key used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientKeyWo">ClientKeyWo</a></code> | <code>string</code> | Write-only client key used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientKeyWoVersion">ClientKeyWoVersion</a></code> | <code>double</code> | Version counter for write-only client_key. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.description">Description</a></code> | <code>string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.forceNoCache">ForceNoCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#id NomadSecretBackend#id}. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.identityTokenKey">IdentityTokenKey</a></code> | <code>string</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.local">Local</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Mark the secrets engine as local-only. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxTokenNameLength">MaxTokenNameLength</a></code> | <code>double</code> | Specifies the maximum length to use for the name of the Nomad token generated with Generate Credential. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxTtl">MaxTtl</a></code> | <code>double</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.pluginVersion">PluginVersion</a></code> | <code>string</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.sealWrap">SealWrap</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.token">Token</a></code> | <code>string</code> | Specifies the Nomad Management token to use. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.tokenWo">TokenWo</a></code> | <code>string</code> | Write-only Nomad Management token to use. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.tokenWoVersion">TokenWoVersion</a></code> | <code>double</code> | Version counter for write-only token. |
| <code><a href="#@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.ttl">Ttl</a></code> | <code>double</code> | Maximum possible lease duration for secrets in seconds. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Specifies the address of the Nomad instance, provided as "protocol://host:port" like "http://127.0.0.1:4646".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#address NomadSecretBackend#address}

---

##### `AllowedManagedKeys`<sup>Optional</sup> <a name="AllowedManagedKeys" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; set; }
```

- *Type:* string[]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#allowed_managed_keys NomadSecretBackend#allowed_managed_keys}

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#allowed_response_headers NomadSecretBackend#allowed_response_headers}

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#audit_non_hmac_request_keys NomadSecretBackend#audit_non_hmac_request_keys}

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#audit_non_hmac_response_keys NomadSecretBackend#audit_non_hmac_response_keys}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The mount path for the Nomad backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#backend NomadSecretBackend#backend}

---

##### `CaCert`<sup>Optional</sup> <a name="CaCert" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.caCert"></a>

```csharp
public string CaCert { get; set; }
```

- *Type:* string

CA certificate to use when verifying Nomad server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#ca_cert NomadSecretBackend#ca_cert}

---

##### `ClientCert`<sup>Optional</sup> <a name="ClientCert" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientCert"></a>

```csharp
public string ClientCert { get; set; }
```

- *Type:* string

Client certificate used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#client_cert NomadSecretBackend#client_cert}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientKey"></a>

```csharp
public string ClientKey { get; set; }
```

- *Type:* string

Client key used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#client_key NomadSecretBackend#client_key}

---

##### `ClientKeyWo`<sup>Optional</sup> <a name="ClientKeyWo" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientKeyWo"></a>

```csharp
public string ClientKeyWo { get; set; }
```

- *Type:* string

Write-only client key used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#client_key_wo NomadSecretBackend#client_key_wo}

---

##### `ClientKeyWoVersion`<sup>Optional</sup> <a name="ClientKeyWoVersion" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientKeyWoVersion"></a>

```csharp
public double ClientKeyWoVersion { get; set; }
```

- *Type:* double

Version counter for write-only client_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#client_key_wo_version NomadSecretBackend#client_key_wo_version}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; set; }
```

- *Type:* double

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#default_lease_ttl_seconds NomadSecretBackend#default_lease_ttl_seconds}

---

##### `DelegatedAuthAccessors`<sup>Optional</sup> <a name="DelegatedAuthAccessors" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.delegatedAuthAccessors"></a>

```csharp
public string[] DelegatedAuthAccessors { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#delegated_auth_accessors NomadSecretBackend#delegated_auth_accessors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#description NomadSecretBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#disable_remount NomadSecretBackend#disable_remount}

---

##### `ExternalEntropyAccess`<sup>Optional</sup> <a name="ExternalEntropyAccess" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.externalEntropyAccess"></a>

```csharp
public bool|IResolvable ExternalEntropyAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#external_entropy_access NomadSecretBackend#external_entropy_access}

---

##### `ForceNoCache`<sup>Optional</sup> <a name="ForceNoCache" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.forceNoCache"></a>

```csharp
public bool|IResolvable ForceNoCache { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#force_no_cache NomadSecretBackend#force_no_cache}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#id NomadSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenKey`<sup>Optional</sup> <a name="IdentityTokenKey" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.identityTokenKey"></a>

```csharp
public string IdentityTokenKey { get; set; }
```

- *Type:* string

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#identity_token_key NomadSecretBackend#identity_token_key}

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; set; }
```

- *Type:* string

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#listing_visibility NomadSecretBackend#listing_visibility}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.local"></a>

```csharp
public bool|IResolvable Local { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Mark the secrets engine as local-only.

Local engines are not replicated or removed by replication. Tolerance duration to use when checking the last rotation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#local NomadSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; set; }
```

- *Type:* double

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#max_lease_ttl_seconds NomadSecretBackend#max_lease_ttl_seconds}

---

##### `MaxTokenNameLength`<sup>Optional</sup> <a name="MaxTokenNameLength" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxTokenNameLength"></a>

```csharp
public double MaxTokenNameLength { get; set; }
```

- *Type:* double

Specifies the maximum length to use for the name of the Nomad token generated with Generate Credential.

If omitted, 0 is used and ignored, defaulting to the max value allowed by the Nomad version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#max_token_name_length NomadSecretBackend#max_token_name_length}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxTtl"></a>

```csharp
public double MaxTtl { get; set; }
```

- *Type:* double

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#max_ttl NomadSecretBackend#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#namespace NomadSecretBackend#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#options NomadSecretBackend#options}

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#passthrough_request_headers NomadSecretBackend#passthrough_request_headers}

---

##### `PluginVersion`<sup>Optional</sup> <a name="PluginVersion" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.pluginVersion"></a>

```csharp
public string PluginVersion { get; set; }
```

- *Type:* string

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#plugin_version NomadSecretBackend#plugin_version}

---

##### `SealWrap`<sup>Optional</sup> <a name="SealWrap" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.sealWrap"></a>

```csharp
public bool|IResolvable SealWrap { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#seal_wrap NomadSecretBackend#seal_wrap}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Specifies the Nomad Management token to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#token NomadSecretBackend#token}

---

##### `TokenWo`<sup>Optional</sup> <a name="TokenWo" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.tokenWo"></a>

```csharp
public string TokenWo { get; set; }
```

- *Type:* string

Write-only Nomad Management token to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#token_wo NomadSecretBackend#token_wo}

---

##### `TokenWoVersion`<sup>Optional</sup> <a name="TokenWoVersion" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.tokenWoVersion"></a>

```csharp
public double TokenWoVersion { get; set; }
```

- *Type:* double

Version counter for write-only token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#token_wo_version NomadSecretBackend#token_wo_version}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/nomad_secret_backend#ttl NomadSecretBackend#ttl}

---



