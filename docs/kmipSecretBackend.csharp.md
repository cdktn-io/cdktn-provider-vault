# `kmipSecretBackend` Submodule <a name="`kmipSecretBackend` Submodule" id="@cdktn/provider-vault.kmipSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretBackend <a name="KmipSecretBackend" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend vault_kmip_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KmipSecretBackend(Construct Scope, string Id, KmipSecretBackendConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig">KmipSecretBackendConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig">KmipSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAllowedManagedKeys">ResetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAllowedResponseHeaders">ResetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAuditNonHmacRequestKeys">ResetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAuditNonHmacResponseKeys">ResetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultLeaseTtlSeconds">ResetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyBits">ResetDefaultTlsClientKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyType">ResetDefaultTlsClientKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientTtl">ResetDefaultTlsClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDelegatedAuthAccessors">ResetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDisableRemount">ResetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetExternalEntropyAccess">ResetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetForceNoCache">ResetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetIdentityTokenKey">ResetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListenAddrs">ResetListenAddrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListingVisibility">ResetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetMaxLeaseTtlSeconds">ResetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetPassthroughRequestHeaders">ResetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetPluginVersion">ResetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetSealWrap">ResetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerHostnames">ResetServerHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerIps">ResetServerIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyBits">ResetTlsCaKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyType">ResetTlsCaKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsMinVersion">ResetTlsMinVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedManagedKeys` <a name="ResetAllowedManagedKeys" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAllowedManagedKeys"></a>

```csharp
private void ResetAllowedManagedKeys()
```

##### `ResetAllowedResponseHeaders` <a name="ResetAllowedResponseHeaders" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAllowedResponseHeaders"></a>

```csharp
private void ResetAllowedResponseHeaders()
```

##### `ResetAuditNonHmacRequestKeys` <a name="ResetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAuditNonHmacRequestKeys"></a>

```csharp
private void ResetAuditNonHmacRequestKeys()
```

##### `ResetAuditNonHmacResponseKeys` <a name="ResetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetAuditNonHmacResponseKeys"></a>

```csharp
private void ResetAuditNonHmacResponseKeys()
```

##### `ResetDefaultLeaseTtlSeconds` <a name="ResetDefaultLeaseTtlSeconds" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```csharp
private void ResetDefaultLeaseTtlSeconds()
```

##### `ResetDefaultTlsClientKeyBits` <a name="ResetDefaultTlsClientKeyBits" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyBits"></a>

```csharp
private void ResetDefaultTlsClientKeyBits()
```

##### `ResetDefaultTlsClientKeyType` <a name="ResetDefaultTlsClientKeyType" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyType"></a>

```csharp
private void ResetDefaultTlsClientKeyType()
```

##### `ResetDefaultTlsClientTtl` <a name="ResetDefaultTlsClientTtl" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientTtl"></a>

```csharp
private void ResetDefaultTlsClientTtl()
```

##### `ResetDelegatedAuthAccessors` <a name="ResetDelegatedAuthAccessors" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDelegatedAuthAccessors"></a>

```csharp
private void ResetDelegatedAuthAccessors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableRemount` <a name="ResetDisableRemount" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDisableRemount"></a>

```csharp
private void ResetDisableRemount()
```

##### `ResetExternalEntropyAccess` <a name="ResetExternalEntropyAccess" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetExternalEntropyAccess"></a>

```csharp
private void ResetExternalEntropyAccess()
```

##### `ResetForceNoCache` <a name="ResetForceNoCache" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetForceNoCache"></a>

```csharp
private void ResetForceNoCache()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityTokenKey` <a name="ResetIdentityTokenKey" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetIdentityTokenKey"></a>

```csharp
private void ResetIdentityTokenKey()
```

##### `ResetListenAddrs` <a name="ResetListenAddrs" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListenAddrs"></a>

```csharp
private void ResetListenAddrs()
```

##### `ResetListingVisibility` <a name="ResetListingVisibility" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListingVisibility"></a>

```csharp
private void ResetListingVisibility()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetMaxLeaseTtlSeconds` <a name="ResetMaxLeaseTtlSeconds" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetMaxLeaseTtlSeconds"></a>

```csharp
private void ResetMaxLeaseTtlSeconds()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetPassthroughRequestHeaders` <a name="ResetPassthroughRequestHeaders" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetPassthroughRequestHeaders"></a>

```csharp
private void ResetPassthroughRequestHeaders()
```

##### `ResetPluginVersion` <a name="ResetPluginVersion" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetPluginVersion"></a>

```csharp
private void ResetPluginVersion()
```

##### `ResetSealWrap` <a name="ResetSealWrap" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetSealWrap"></a>

```csharp
private void ResetSealWrap()
```

##### `ResetServerHostnames` <a name="ResetServerHostnames" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerHostnames"></a>

```csharp
private void ResetServerHostnames()
```

##### `ResetServerIps` <a name="ResetServerIps" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerIps"></a>

```csharp
private void ResetServerIps()
```

##### `ResetTlsCaKeyBits` <a name="ResetTlsCaKeyBits" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyBits"></a>

```csharp
private void ResetTlsCaKeyBits()
```

##### `ResetTlsCaKeyType` <a name="ResetTlsCaKeyType" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyType"></a>

```csharp
private void ResetTlsCaKeyType()
```

##### `ResetTlsMinVersion` <a name="ResetTlsMinVersion" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsMinVersion"></a>

```csharp
private void ResetTlsMinVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KmipSecretBackend resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KmipSecretBackend.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KmipSecretBackend.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KmipSecretBackend.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KmipSecretBackend.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KmipSecretBackend resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmipSecretBackend to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmipSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KmipSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedManagedKeysInput">AllowedManagedKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedResponseHeadersInput">AllowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacRequestKeysInput">AuditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacResponseKeysInput">AuditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultLeaseTtlSecondsInput">DefaultLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBitsInput">DefaultTlsClientKeyBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyTypeInput">DefaultTlsClientKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtlInput">DefaultTlsClientTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.delegatedAuthAccessorsInput">DelegatedAuthAccessorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemountInput">DisableRemountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.externalEntropyAccessInput">ExternalEntropyAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forceNoCacheInput">ForceNoCacheInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.identityTokenKeyInput">IdentityTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrsInput">ListenAddrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listingVisibilityInput">ListingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.localInput">LocalInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.maxLeaseTtlSecondsInput">MaxLeaseTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.passthroughRequestHeadersInput">PassthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pluginVersionInput">PluginVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.sealWrapInput">SealWrapInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnamesInput">ServerHostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIpsInput">ServerIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBitsInput">TlsCaKeyBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyTypeInput">TlsCaKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersionInput">TlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBits">DefaultTlsClientKeyBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyType">DefaultTlsClientKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtl">DefaultTlsClientTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemount">DisableRemount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forceNoCache">ForceNoCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.identityTokenKey">IdentityTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrs">ListenAddrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.local">Local</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pluginVersion">PluginVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.sealWrap">SealWrap</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnames">ServerHostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIps">ServerIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBits">TlsCaKeyBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyType">TlsCaKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `AllowedManagedKeysInput`<sup>Optional</sup> <a name="AllowedManagedKeysInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedManagedKeysInput"></a>

```csharp
public string[] AllowedManagedKeysInput { get; }
```

- *Type:* string[]

---

##### `AllowedResponseHeadersInput`<sup>Optional</sup> <a name="AllowedResponseHeadersInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedResponseHeadersInput"></a>

```csharp
public string[] AllowedResponseHeadersInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="AuditNonHmacRequestKeysInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```csharp
public string[] AuditNonHmacRequestKeysInput { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="AuditNonHmacResponseKeysInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```csharp
public string[] AuditNonHmacResponseKeysInput { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="DefaultLeaseTtlSecondsInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```csharp
public double DefaultLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `DefaultTlsClientKeyBitsInput`<sup>Optional</sup> <a name="DefaultTlsClientKeyBitsInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBitsInput"></a>

```csharp
public double DefaultTlsClientKeyBitsInput { get; }
```

- *Type:* double

---

##### `DefaultTlsClientKeyTypeInput`<sup>Optional</sup> <a name="DefaultTlsClientKeyTypeInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyTypeInput"></a>

```csharp
public string DefaultTlsClientKeyTypeInput { get; }
```

- *Type:* string

---

##### `DefaultTlsClientTtlInput`<sup>Optional</sup> <a name="DefaultTlsClientTtlInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtlInput"></a>

```csharp
public double DefaultTlsClientTtlInput { get; }
```

- *Type:* double

---

##### `DelegatedAuthAccessorsInput`<sup>Optional</sup> <a name="DelegatedAuthAccessorsInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.delegatedAuthAccessorsInput"></a>

```csharp
public string[] DelegatedAuthAccessorsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableRemountInput`<sup>Optional</sup> <a name="DisableRemountInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemountInput"></a>

```csharp
public bool|IResolvable DisableRemountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalEntropyAccessInput`<sup>Optional</sup> <a name="ExternalEntropyAccessInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.externalEntropyAccessInput"></a>

```csharp
public bool|IResolvable ExternalEntropyAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceNoCacheInput`<sup>Optional</sup> <a name="ForceNoCacheInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forceNoCacheInput"></a>

```csharp
public bool|IResolvable ForceNoCacheInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityTokenKeyInput`<sup>Optional</sup> <a name="IdentityTokenKeyInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.identityTokenKeyInput"></a>

```csharp
public string IdentityTokenKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListenAddrsInput`<sup>Optional</sup> <a name="ListenAddrsInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrsInput"></a>

```csharp
public string[] ListenAddrsInput { get; }
```

- *Type:* string[]

---

##### `ListingVisibilityInput`<sup>Optional</sup> <a name="ListingVisibilityInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listingVisibilityInput"></a>

```csharp
public string ListingVisibilityInput { get; }
```

- *Type:* string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.localInput"></a>

```csharp
public bool|IResolvable LocalInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="MaxLeaseTtlSecondsInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```csharp
public double MaxLeaseTtlSecondsInput { get; }
```

- *Type:* double

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PassthroughRequestHeadersInput`<sup>Optional</sup> <a name="PassthroughRequestHeadersInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.passthroughRequestHeadersInput"></a>

```csharp
public string[] PassthroughRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PluginVersionInput`<sup>Optional</sup> <a name="PluginVersionInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pluginVersionInput"></a>

```csharp
public string PluginVersionInput { get; }
```

- *Type:* string

---

##### `SealWrapInput`<sup>Optional</sup> <a name="SealWrapInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.sealWrapInput"></a>

```csharp
public bool|IResolvable SealWrapInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServerHostnamesInput`<sup>Optional</sup> <a name="ServerHostnamesInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnamesInput"></a>

```csharp
public string[] ServerHostnamesInput { get; }
```

- *Type:* string[]

---

##### `ServerIpsInput`<sup>Optional</sup> <a name="ServerIpsInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIpsInput"></a>

```csharp
public string[] ServerIpsInput { get; }
```

- *Type:* string[]

---

##### `TlsCaKeyBitsInput`<sup>Optional</sup> <a name="TlsCaKeyBitsInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBitsInput"></a>

```csharp
public double TlsCaKeyBitsInput { get; }
```

- *Type:* double

---

##### `TlsCaKeyTypeInput`<sup>Optional</sup> <a name="TlsCaKeyTypeInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyTypeInput"></a>

```csharp
public string TlsCaKeyTypeInput { get; }
```

- *Type:* string

---

##### `TlsMinVersionInput`<sup>Optional</sup> <a name="TlsMinVersionInput" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersionInput"></a>

```csharp
public string TlsMinVersionInput { get; }
```

- *Type:* string

---

##### `AllowedManagedKeys`<sup>Required</sup> <a name="AllowedManagedKeys" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; }
```

- *Type:* string[]

---

##### `AllowedResponseHeaders`<sup>Required</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacRequestKeys`<sup>Required</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; }
```

- *Type:* string[]

---

##### `AuditNonHmacResponseKeys`<sup>Required</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; }
```

- *Type:* string[]

---

##### `DefaultLeaseTtlSeconds`<sup>Required</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `DefaultTlsClientKeyBits`<sup>Required</sup> <a name="DefaultTlsClientKeyBits" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBits"></a>

```csharp
public double DefaultTlsClientKeyBits { get; }
```

- *Type:* double

---

##### `DefaultTlsClientKeyType`<sup>Required</sup> <a name="DefaultTlsClientKeyType" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyType"></a>

```csharp
public string DefaultTlsClientKeyType { get; }
```

- *Type:* string

---

##### `DefaultTlsClientTtl`<sup>Required</sup> <a name="DefaultTlsClientTtl" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtl"></a>

```csharp
public double DefaultTlsClientTtl { get; }
```

- *Type:* double

---

##### `DelegatedAuthAccessors`<sup>Required</sup> <a name="DelegatedAuthAccessors" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.delegatedAuthAccessors"></a>

```csharp
public string[] DelegatedAuthAccessors { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableRemount`<sup>Required</sup> <a name="DisableRemount" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalEntropyAccess`<sup>Required</sup> <a name="ExternalEntropyAccess" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.externalEntropyAccess"></a>

```csharp
public bool|IResolvable ExternalEntropyAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceNoCache`<sup>Required</sup> <a name="ForceNoCache" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forceNoCache"></a>

```csharp
public bool|IResolvable ForceNoCache { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityTokenKey`<sup>Required</sup> <a name="IdentityTokenKey" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.identityTokenKey"></a>

```csharp
public string IdentityTokenKey { get; }
```

- *Type:* string

---

##### `ListenAddrs`<sup>Required</sup> <a name="ListenAddrs" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrs"></a>

```csharp
public string[] ListenAddrs { get; }
```

- *Type:* string[]

---

##### `ListingVisibility`<sup>Required</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; }
```

- *Type:* string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.local"></a>

```csharp
public bool|IResolvable Local { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxLeaseTtlSeconds`<sup>Required</sup> <a name="MaxLeaseTtlSeconds" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PassthroughRequestHeaders`<sup>Required</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; }
```

- *Type:* string[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PluginVersion`<sup>Required</sup> <a name="PluginVersion" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pluginVersion"></a>

```csharp
public string PluginVersion { get; }
```

- *Type:* string

---

##### `SealWrap`<sup>Required</sup> <a name="SealWrap" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.sealWrap"></a>

```csharp
public bool|IResolvable SealWrap { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServerHostnames`<sup>Required</sup> <a name="ServerHostnames" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnames"></a>

```csharp
public string[] ServerHostnames { get; }
```

- *Type:* string[]

---

##### `ServerIps`<sup>Required</sup> <a name="ServerIps" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIps"></a>

```csharp
public string[] ServerIps { get; }
```

- *Type:* string[]

---

##### `TlsCaKeyBits`<sup>Required</sup> <a name="TlsCaKeyBits" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBits"></a>

```csharp
public double TlsCaKeyBits { get; }
```

- *Type:* double

---

##### `TlsCaKeyType`<sup>Required</sup> <a name="TlsCaKeyType" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyType"></a>

```csharp
public string TlsCaKeyType { get; }
```

- *Type:* string

---

##### `TlsMinVersion`<sup>Required</sup> <a name="TlsMinVersion" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretBackendConfig <a name="KmipSecretBackendConfig" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KmipSecretBackendConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Path,
    string[] AllowedManagedKeys = null,
    string[] AllowedResponseHeaders = null,
    string[] AuditNonHmacRequestKeys = null,
    string[] AuditNonHmacResponseKeys = null,
    double DefaultLeaseTtlSeconds = null,
    double DefaultTlsClientKeyBits = null,
    string DefaultTlsClientKeyType = null,
    double DefaultTlsClientTtl = null,
    string[] DelegatedAuthAccessors = null,
    string Description = null,
    bool|IResolvable DisableRemount = null,
    bool|IResolvable ExternalEntropyAccess = null,
    bool|IResolvable ForceNoCache = null,
    string Id = null,
    string IdentityTokenKey = null,
    string[] ListenAddrs = null,
    string ListingVisibility = null,
    bool|IResolvable Local = null,
    double MaxLeaseTtlSeconds = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    string[] PassthroughRequestHeaders = null,
    string PluginVersion = null,
    bool|IResolvable SealWrap = null,
    string[] ServerHostnames = null,
    string[] ServerIps = null,
    double TlsCaKeyBits = null,
    string TlsCaKeyType = null,
    string TlsMinVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.path">Path</a></code> | <code>string</code> | Path where KMIP secret backend will be mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.allowedManagedKeys">AllowedManagedKeys</a></code> | <code>string[]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.allowedResponseHeaders">AllowedResponseHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.auditNonHmacRequestKeys">AuditNonHmacRequestKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.auditNonHmacResponseKeys">AuditNonHmacResponseKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultLeaseTtlSeconds">DefaultLeaseTtlSeconds</a></code> | <code>double</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyBits">DefaultTlsClientKeyBits</a></code> | <code>double</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyType">DefaultTlsClientKeyType</a></code> | <code>string</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientTtl">DefaultTlsClientTtl</a></code> | <code>double</code> | Client certificate TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.delegatedAuthAccessors">DelegatedAuthAccessors</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.description">Description</a></code> | <code>string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.disableRemount">DisableRemount</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.externalEntropyAccess">ExternalEntropyAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forceNoCache">ForceNoCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.identityTokenKey">IdentityTokenKey</a></code> | <code>string</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listenAddrs">ListenAddrs</a></code> | <code>string[]</code> | Addresses the KMIP server should listen on (host:port). |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listingVisibility">ListingVisibility</a></code> | <code>string</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.local">Local</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.maxLeaseTtlSeconds">MaxLeaseTtlSeconds</a></code> | <code>double</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.passthroughRequestHeaders">PassthroughRequestHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.pluginVersion">PluginVersion</a></code> | <code>string</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.sealWrap">SealWrap</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverHostnames">ServerHostnames</a></code> | <code>string[]</code> | Hostnames to include in the server's TLS certificate as SAN DNS names. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverIps">ServerIps</a></code> | <code>string[]</code> | IPs to include in the server's TLS certificate as SAN IP addresses. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyBits">TlsCaKeyBits</a></code> | <code>double</code> | CA key bits, valid values depend on key type. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyType">TlsCaKeyType</a></code> | <code>string</code> | CA key type, rsa or ec. |
| <code><a href="#@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsMinVersion">TlsMinVersion</a></code> | <code>string</code> | Minimum TLS version to accept. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path where KMIP secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#path KmipSecretBackend#path}

---

##### `AllowedManagedKeys`<sup>Optional</sup> <a name="AllowedManagedKeys" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.allowedManagedKeys"></a>

```csharp
public string[] AllowedManagedKeys { get; set; }
```

- *Type:* string[]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#allowed_managed_keys KmipSecretBackend#allowed_managed_keys}

---

##### `AllowedResponseHeaders`<sup>Optional</sup> <a name="AllowedResponseHeaders" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.allowedResponseHeaders"></a>

```csharp
public string[] AllowedResponseHeaders { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#allowed_response_headers KmipSecretBackend#allowed_response_headers}

---

##### `AuditNonHmacRequestKeys`<sup>Optional</sup> <a name="AuditNonHmacRequestKeys" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```csharp
public string[] AuditNonHmacRequestKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#audit_non_hmac_request_keys KmipSecretBackend#audit_non_hmac_request_keys}

---

##### `AuditNonHmacResponseKeys`<sup>Optional</sup> <a name="AuditNonHmacResponseKeys" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```csharp
public string[] AuditNonHmacResponseKeys { get; set; }
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#audit_non_hmac_response_keys KmipSecretBackend#audit_non_hmac_response_keys}

---

##### `DefaultLeaseTtlSeconds`<sup>Optional</sup> <a name="DefaultLeaseTtlSeconds" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```csharp
public double DefaultLeaseTtlSeconds { get; set; }
```

- *Type:* double

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#default_lease_ttl_seconds KmipSecretBackend#default_lease_ttl_seconds}

---

##### `DefaultTlsClientKeyBits`<sup>Optional</sup> <a name="DefaultTlsClientKeyBits" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyBits"></a>

```csharp
public double DefaultTlsClientKeyBits { get; set; }
```

- *Type:* double

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#default_tls_client_key_bits KmipSecretBackend#default_tls_client_key_bits}

---

##### `DefaultTlsClientKeyType`<sup>Optional</sup> <a name="DefaultTlsClientKeyType" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyType"></a>

```csharp
public string DefaultTlsClientKeyType { get; set; }
```

- *Type:* string

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#default_tls_client_key_type KmipSecretBackend#default_tls_client_key_type}

---

##### `DefaultTlsClientTtl`<sup>Optional</sup> <a name="DefaultTlsClientTtl" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientTtl"></a>

```csharp
public double DefaultTlsClientTtl { get; set; }
```

- *Type:* double

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#default_tls_client_ttl KmipSecretBackend#default_tls_client_ttl}

---

##### `DelegatedAuthAccessors`<sup>Optional</sup> <a name="DelegatedAuthAccessors" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.delegatedAuthAccessors"></a>

```csharp
public string[] DelegatedAuthAccessors { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#delegated_auth_accessors KmipSecretBackend#delegated_auth_accessors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#description KmipSecretBackend#description}

---

##### `DisableRemount`<sup>Optional</sup> <a name="DisableRemount" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.disableRemount"></a>

```csharp
public bool|IResolvable DisableRemount { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#disable_remount KmipSecretBackend#disable_remount}

---

##### `ExternalEntropyAccess`<sup>Optional</sup> <a name="ExternalEntropyAccess" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.externalEntropyAccess"></a>

```csharp
public bool|IResolvable ExternalEntropyAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#external_entropy_access KmipSecretBackend#external_entropy_access}

---

##### `ForceNoCache`<sup>Optional</sup> <a name="ForceNoCache" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forceNoCache"></a>

```csharp
public bool|IResolvable ForceNoCache { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#force_no_cache KmipSecretBackend#force_no_cache}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityTokenKey`<sup>Optional</sup> <a name="IdentityTokenKey" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.identityTokenKey"></a>

```csharp
public string IdentityTokenKey { get; set; }
```

- *Type:* string

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#identity_token_key KmipSecretBackend#identity_token_key}

---

##### `ListenAddrs`<sup>Optional</sup> <a name="ListenAddrs" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listenAddrs"></a>

```csharp
public string[] ListenAddrs { get; set; }
```

- *Type:* string[]

Addresses the KMIP server should listen on (host:port).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#listen_addrs KmipSecretBackend#listen_addrs}

---

##### `ListingVisibility`<sup>Optional</sup> <a name="ListingVisibility" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listingVisibility"></a>

```csharp
public string ListingVisibility { get; set; }
```

- *Type:* string

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#listing_visibility KmipSecretBackend#listing_visibility}

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.local"></a>

```csharp
public bool|IResolvable Local { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#local KmipSecretBackend#local}

---

##### `MaxLeaseTtlSeconds`<sup>Optional</sup> <a name="MaxLeaseTtlSeconds" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```csharp
public double MaxLeaseTtlSeconds { get; set; }
```

- *Type:* double

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#max_lease_ttl_seconds KmipSecretBackend#max_lease_ttl_seconds}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#namespace KmipSecretBackend#namespace}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#options KmipSecretBackend#options}

---

##### `PassthroughRequestHeaders`<sup>Optional</sup> <a name="PassthroughRequestHeaders" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.passthroughRequestHeaders"></a>

```csharp
public string[] PassthroughRequestHeaders { get; set; }
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#passthrough_request_headers KmipSecretBackend#passthrough_request_headers}

---

##### `PluginVersion`<sup>Optional</sup> <a name="PluginVersion" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.pluginVersion"></a>

```csharp
public string PluginVersion { get; set; }
```

- *Type:* string

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#plugin_version KmipSecretBackend#plugin_version}

---

##### `SealWrap`<sup>Optional</sup> <a name="SealWrap" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.sealWrap"></a>

```csharp
public bool|IResolvable SealWrap { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#seal_wrap KmipSecretBackend#seal_wrap}

---

##### `ServerHostnames`<sup>Optional</sup> <a name="ServerHostnames" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverHostnames"></a>

```csharp
public string[] ServerHostnames { get; set; }
```

- *Type:* string[]

Hostnames to include in the server's TLS certificate as SAN DNS names.

The first will be used as the common name (CN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#server_hostnames KmipSecretBackend#server_hostnames}

---

##### `ServerIps`<sup>Optional</sup> <a name="ServerIps" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverIps"></a>

```csharp
public string[] ServerIps { get; set; }
```

- *Type:* string[]

IPs to include in the server's TLS certificate as SAN IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#server_ips KmipSecretBackend#server_ips}

---

##### `TlsCaKeyBits`<sup>Optional</sup> <a name="TlsCaKeyBits" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyBits"></a>

```csharp
public double TlsCaKeyBits { get; set; }
```

- *Type:* double

CA key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#tls_ca_key_bits KmipSecretBackend#tls_ca_key_bits}

---

##### `TlsCaKeyType`<sup>Optional</sup> <a name="TlsCaKeyType" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyType"></a>

```csharp
public string TlsCaKeyType { get; set; }
```

- *Type:* string

CA key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#tls_ca_key_type KmipSecretBackend#tls_ca_key_type}

---

##### `TlsMinVersion`<sup>Optional</sup> <a name="TlsMinVersion" id="@cdktn/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsMinVersion"></a>

```csharp
public string TlsMinVersion { get; set; }
```

- *Type:* string

Minimum TLS version to accept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/kmip_secret_backend#tls_min_version KmipSecretBackend#tls_min_version}

---



