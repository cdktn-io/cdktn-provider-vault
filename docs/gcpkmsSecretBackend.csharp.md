# `gcpkmsSecretBackend` Submodule <a name="`gcpkmsSecretBackend` Submodule" id="@cdktn/provider-vault.gcpkmsSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpkmsSecretBackend <a name="GcpkmsSecretBackend" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend vault_gcpkms_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new GcpkmsSecretBackend(Construct Scope, string Id, GcpkmsSecretBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig">GcpkmsSecretBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig">GcpkmsSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAllowedManagedKeys">ResetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetCredentialsWo">ResetCredentialsWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDelegatedAuthAccessors">ResetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetExternalEntropyAccess">ResetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetForceNoCache">ResetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetIdentityTokenKey">ResetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetPluginVersion">ResetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetSealWrap">ResetSealWrap</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedManagedKeys` <a name="ResetAllowedManagedKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAllowedManagedKeys"></a>

```csharp
private void ResetAllowedManagedKeys()
```

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAllowedResponseHeaders"></a>

```csharp
private void ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAuditNonHmacRequestKeys"></a>

```csharp
private void ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetAuditNonHmacResponseKeys"></a>

```csharp
private void ResetAuditNonHmacResponseKeys()
```

##### `ResetCredentialsWo` <a name="ResetCredentialsWo" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetCredentialsWo"></a>

```csharp
private void ResetCredentialsWo()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```csharp
private void ResetDefaultLeaseTtlSeconds()
```

##### `ResetDelegatedAuthAccessors` <a name="ResetDelegatedAuthAccessors" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDelegatedAuthAccessors"></a>

```csharp
private void ResetDelegatedAuthAccessors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExternalEntropyAccess` <a name="ResetExternalEntropyAccess" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetExternalEntropyAccess"></a>

```csharp
private void ResetExternalEntropyAccess()
```

##### `ResetForceNoCache` <a name="ResetForceNoCache" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetForceNoCache"></a>

```csharp
private void ResetForceNoCache()
```

##### `ResetIdentityTokenKey` <a name="ResetIdentityTokenKey" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetIdentityTokenKey"></a>

```csharp
private void ResetIdentityTokenKey()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetListingVisibility"></a>

```csharp
private void ResetListingVisibility()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetMaxLeaseTtlSeconds"></a>

```csharp
private void ResetMaxLeaseTtlSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetPassthroughRequestHeaders"></a>

```csharp
private void ResetPassthroughRequestHeaders()
```

##### `ResetPluginVersion` <a name="ResetPluginVersion" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetPluginVersion"></a>

```csharp
private void ResetPluginVersion()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSealWrap` <a name="ResetSealWrap" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.resetSealWrap"></a>

```csharp
private void ResetSealWrap()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GcpkmsSecretBackend resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GcpkmsSecretBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GcpkmsSecretBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GcpkmsSecretBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GcpkmsSecretBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GcpkmsSecretBackend resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GcpkmsSecretBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GcpkmsSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GcpkmsSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedManagedKeysInput">AllowedManagedKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoInput">CredentialsWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoVersionInput">CredentialsWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.delegatedAuthAccessorsInput">DelegatedAuthAccessorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.externalEntropyAccessInput">ExternalEntropyAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forceNoCacheInput">ForceNoCacheInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.identityTokenKeyInput">IdentityTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.localInput">LocalInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pluginVersionInput">PluginVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.sealWrapInput">SealWrapInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWo">CredentialsWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoVersion">CredentialsWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forceNoCache">ForceNoCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.identityTokenKey">IdentityTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.local">Local</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pluginVersion">PluginVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.sealWrap">SealWrap</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `AllowedManagedKeysInput`<sup>Optional</sup> <a name="AllowedManagedKeysInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedManagedKeysInput"></a>

```csharp
public string[] AllowedManagedKeysInput { get; }
```

- *Type:* string[]

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedResponseHeadersInput"></a>

```csharp
public string[] AllowedResponseHeadersInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```csharp
public string[] AuditNonHmacRequestKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```csharp
public string[] AuditNonHmacResponseKeysInput { get; }
```

- *Type:* string[]

---

##### `CredentialsWoInput`<sup>Optional</sup> <a name="CredentialsWoInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoInput"></a>

```csharp
public string CredentialsWoInput { get; }
```

- *Type:* string

---

##### `CredentialsWoVersionInput`<sup>Optional</sup> <a name="CredentialsWoVersionInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoVersionInput"></a>

```csharp
public double CredentialsWoVersionInput { get; }
```

- *Type:* double

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```csharp
public double DefaultLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `DelegatedAuthAccessorsInput`<sup>Optional</sup> <a name="DelegatedAuthAccessorsInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.delegatedAuthAccessorsInput"></a>

```csharp
public string[] DelegatedAuthAccessorsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExternalEntropyAccessInput`<sup>Optional</sup> <a name="ExternalEntropyAccessInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.externalEntropyAccessInput"></a>

```csharp
public bool|IResolvable ExternalEntropyAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceNoCacheInput`<sup>Optional</sup> <a name="ForceNoCacheInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forceNoCacheInput"></a>

```csharp
public bool|IResolvable ForceNoCacheInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityTokenKeyInput`<sup>Optional</sup> <a name="IdentityTokenKeyInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.identityTokenKeyInput"></a>

```csharp
public string IdentityTokenKeyInput { get; }
```

- *Type:* string

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.listingVisibilityInput"></a>

```csharp
public string ListingVisibilityInput { get; }
```

- *Type:* string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.localInput"></a>

```csharp
public bool|IResolvable LocalInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```csharp
public double MaxLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.passthroughRequestHeadersInput"></a>

```csharp
public string[] PassthroughRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PluginVersionInput`<sup>Optional</sup> <a name="PluginVersionInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pluginVersionInput"></a>

```csharp
public string PluginVersionInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SealWrapInput`<sup>Optional</sup> <a name="SealWrapInput" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.sealWrapInput"></a>

```csharp
public bool|IResolvable SealWrapInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowedManagedKeys`<sup>Required</sup> <a name="AllowedManagedKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; }
```

- *Type:* string[]

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; }
```

- *Type:* string[]

---

##### ~~`CredentialsWo`~~<sup>Required</sup> <a name="CredentialsWo" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string CredentialsWo { get; }
```

- *Type:* string

---

##### `CredentialsWoVersion`<sup>Required</sup> <a name="CredentialsWoVersion" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.credentialsWoVersion"></a>

```csharp
public double CredentialsWoVersion { get; }
```

- *Type:* double

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `DelegatedAuthAccessors`<sup>Required</sup> <a name="DelegatedAuthAccessors" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.delegatedAuthAccessors"></a>

```csharp
public string[] DelegatedAuthAccessors { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExternalEntropyAccess`<sup>Required</sup> <a name="ExternalEntropyAccess" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.externalEntropyAccess"></a>

```csharp
public bool|IResolvable ExternalEntropyAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceNoCache`<sup>Required</sup> <a name="ForceNoCache" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.forceNoCache"></a>

```csharp
public bool|IResolvable ForceNoCache { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityTokenKey`<sup>Required</sup> <a name="IdentityTokenKey" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.identityTokenKey"></a>

```csharp
public string IdentityTokenKey { get; }
```

- *Type:* string

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; }
```

- *Type:* string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.local"></a>

```csharp
public bool|IResolvable Local { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; }
```

- *Type:* string[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PluginVersion`<sup>Required</sup> <a name="PluginVersion" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.pluginVersion"></a>

```csharp
public string PluginVersion { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SealWrap`<sup>Required</sup> <a name="SealWrap" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.sealWrap"></a>

```csharp
public bool|IResolvable SealWrap { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpkmsSecretBackendConfig <a name="GcpkmsSecretBackendConfig" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new GcpkmsSecretBackendConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double CredentialsWoVersion,
    string Path,
    string[] AllowedManagedKeys = null,
    string[] AllowedResponseHeaders = null,
    string[] AuditNonHmacRequestKeys = null,
    string[] AuditNonHmacResponseKeys = null,
    string CredentialsWo = null,
    double DefaultLeaseTtlSeconds = null,
    string[] DelegatedAuthAccessors = null,
    string Description = null,
    bool|IResolvable ExternalEntropyAccess = null,
    bool|IResolvable ForceNoCache = null,
    string IdentityTokenKey = null,
    string ListingVisibility = null,
    bool|IResolvable Local = null,
    double MaxLeaseTtlSeconds = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    string[] PassthroughRequestHeaders = null,
    string PluginVersion = null,
    string[] Scopes = null,
    bool|IResolvable SealWrap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.credentialsWoVersion">CredentialsWoVersion</a></code> | <code>double</code> | Version number for the write-only credentials. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.path">Path</a></code> | <code>string</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the plugin to the request. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.credentialsWo">CredentialsWo</a></code> | <code>string</code> | JSON-encoded GCP service account credentials. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>string[]</code> | List of auth accessor IDs that can delegate authentication to this mount. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.description">Description</a></code> | <code>string</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.forceNoCache">ForceNoCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.identityTokenKey">IdentityTokenKey</a></code> | <code>string</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.local">Local</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.pluginVersion">PluginVersion</a></code> | <code>string</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | OAuth scopes to use for GCP API requests. Defaults to ['https://www.googleapis.com/auth/cloudkms']. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.sealWrap">SealWrap</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CredentialsWoVersion`<sup>Required</sup> <a name="CredentialsWoVersion" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.credentialsWoVersion"></a>

```csharp
public double CredentialsWoVersion { get; set; }
```

- *Type:* double

Version number for the write-only credentials.

Increment this value to trigger a credential rotation. Changing this value will cause the credentials to be re-sent to Vault during the next apply. Set `credentials_wo = ""` to rotate to Default Application Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#credentials_wo_version GcpkmsSecretBackend#credentials_wo_version}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#path GcpkmsSecretBackend#path}

---

##### `AllowedManagedKeys`<sup>Optional</sup> <a name="AllowedManagedKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; set; }
```

- *Type:* string[]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#allowed_managed_keys GcpkmsSecretBackend#allowed_managed_keys}

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the plugin to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#allowed_response_headers GcpkmsSecretBackend#allowed_response_headers}

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#audit_non_hmac_request_keys GcpkmsSecretBackend#audit_non_hmac_request_keys}

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#audit_non_hmac_response_keys GcpkmsSecretBackend#audit_non_hmac_response_keys}

---

##### `CredentialsWo`<sup>Optional</sup> <a name="CredentialsWo" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.credentialsWo"></a>

```csharp
public string CredentialsWo { get; set; }
```

- *Type:* string

JSON-encoded GCP service account credentials.

Write-only — never stored in Terraform state. Leave this blank (`""`) to use Default Application Credentials or instance metadata authentication. Requires Terraform 1.11+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#credentials_wo GcpkmsSecretBackend#credentials_wo}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; set; }
```

- *Type:* double

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#default_lease_ttl_seconds GcpkmsSecretBackend#default_lease_ttl_seconds}

---

##### `DelegatedAuthAccessors`<sup>Optional</sup> <a name="DelegatedAuthAccessors" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.delegatedAuthAccessors"></a>

```csharp
public string[] DelegatedAuthAccessors { get; set; }
```

- *Type:* string[]

List of auth accessor IDs that can delegate authentication to this mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#delegated_auth_accessors GcpkmsSecretBackend#delegated_auth_accessors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#description GcpkmsSecretBackend#description}

---

##### `ExternalEntropyAccess`<sup>Optional</sup> <a name="ExternalEntropyAccess" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.externalEntropyAccess"></a>

```csharp
public bool|IResolvable ExternalEntropyAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#external_entropy_access GcpkmsSecretBackend#external_entropy_access}

---

##### `ForceNoCache`<sup>Optional</sup> <a name="ForceNoCache" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.forceNoCache"></a>

```csharp
public bool|IResolvable ForceNoCache { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#force_no_cache GcpkmsSecretBackend#force_no_cache}

---

##### `IdentityTokenKey`<sup>Optional</sup> <a name="IdentityTokenKey" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.identityTokenKey"></a>

```csharp
public string IdentityTokenKey { get; set; }
```

- *Type:* string

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#identity_token_key GcpkmsSecretBackend#identity_token_key}

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; set; }
```

- *Type:* string

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#listing_visibility GcpkmsSecretBackend#listing_visibility}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.local"></a>

```csharp
public bool|IResolvable Local { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#local GcpkmsSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; set; }
```

- *Type:* double

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#max_lease_ttl_seconds GcpkmsSecretBackend#max_lease_ttl_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#namespace GcpkmsSecretBackend#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#options GcpkmsSecretBackend#options}

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#passthrough_request_headers GcpkmsSecretBackend#passthrough_request_headers}

---

##### `PluginVersion`<sup>Optional</sup> <a name="PluginVersion" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.pluginVersion"></a>

```csharp
public string PluginVersion { get; set; }
```

- *Type:* string

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#plugin_version GcpkmsSecretBackend#plugin_version}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

OAuth scopes to use for GCP API requests. Defaults to ['https://www.googleapis.com/auth/cloudkms'].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#scopes GcpkmsSecretBackend#scopes}

---

##### `SealWrap`<sup>Optional</sup> <a name="SealWrap" id="@cdktn/provider-vault.gcpkmsSecretBackend.GcpkmsSecretBackendConfig.property.sealWrap"></a>

```csharp
public bool|IResolvable SealWrap { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend#seal_wrap GcpkmsSecretBackend#seal_wrap}

---



