# `transitSecretBackendKey` Submodule <a name="`transitSecretBackendKey` Submodule" id="@cdktn/provider-vault.transitSecretBackendKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransitSecretBackendKey <a name="TransitSecretBackendKey" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key vault_transit_secret_backend_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransitSecretBackendKey(Construct Scope, string Id, TransitSecretBackendKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig">TransitSecretBackendKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig">TransitSecretBackendKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAllowPlaintextBackup">ResetAllowPlaintextBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotatePeriod">ResetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetConvergentEncryption">ResetConvergentEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDeletionAllowed">ResetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDerived">ResetDerived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetExportable">ResetExportable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypeEc">ResetHybridKeyTypeEc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypePqc">ResetHybridKeyTypePqc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetKeySize">ResetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetManagedKeyId">ResetManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetManagedKeyName">ResetManagedKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinDecryptionVersion">ResetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinEncryptionVersion">ResetMinEncryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetParameterSet">ResetParameterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowPlaintextBackup` <a name="ResetAllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAllowPlaintextBackup"></a>

```csharp
private void ResetAllowPlaintextBackup()
```

##### `ResetAutoRotatePeriod` <a name="ResetAutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotatePeriod"></a>

```csharp
private void ResetAutoRotatePeriod()
```

##### `ResetContext` <a name="ResetContext" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetConvergentEncryption` <a name="ResetConvergentEncryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetConvergentEncryption"></a>

```csharp
private void ResetConvergentEncryption()
```

##### `ResetDeletionAllowed` <a name="ResetDeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDeletionAllowed"></a>

```csharp
private void ResetDeletionAllowed()
```

##### `ResetDerived` <a name="ResetDerived" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDerived"></a>

```csharp
private void ResetDerived()
```

##### `ResetExportable` <a name="ResetExportable" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetExportable"></a>

```csharp
private void ResetExportable()
```

##### `ResetHybridKeyTypeEc` <a name="ResetHybridKeyTypeEc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypeEc"></a>

```csharp
private void ResetHybridKeyTypeEc()
```

##### `ResetHybridKeyTypePqc` <a name="ResetHybridKeyTypePqc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypePqc"></a>

```csharp
private void ResetHybridKeyTypePqc()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeySize` <a name="ResetKeySize" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetKeySize"></a>

```csharp
private void ResetKeySize()
```

##### `ResetManagedKeyId` <a name="ResetManagedKeyId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetManagedKeyId"></a>

```csharp
private void ResetManagedKeyId()
```

##### `ResetManagedKeyName` <a name="ResetManagedKeyName" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetManagedKeyName"></a>

```csharp
private void ResetManagedKeyName()
```

##### `ResetMinDecryptionVersion` <a name="ResetMinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinDecryptionVersion"></a>

```csharp
private void ResetMinDecryptionVersion()
```

##### `ResetMinEncryptionVersion` <a name="ResetMinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinEncryptionVersion"></a>

```csharp
private void ResetMinEncryptionVersion()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetParameterSet` <a name="ResetParameterSet" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetParameterSet"></a>

```csharp
private void ResetParameterSet()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransitSecretBackendKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransitSecretBackendKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransitSecretBackendKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransitSecretBackendKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransitSecretBackendKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TransitSecretBackendKey resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransitSecretBackendKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransitSecretBackendKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TransitSecretBackendKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keys">Keys</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.latestVersion">LatestVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minAvailableVersion">MinAvailableVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDecryption">SupportsDecryption</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDerivation">SupportsDerivation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsEncryption">SupportsEncryption</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsSigning">SupportsSigning</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackupInput">AllowPlaintextBackupInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriodInput">AutoRotatePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryptionInput">ConvergentEncryptionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowedInput">DeletionAllowedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derivedInput">DerivedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportableInput">ExportableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEcInput">HybridKeyTypeEcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqcInput">HybridKeyTypePqcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySizeInput">KeySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyIdInput">ManagedKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyNameInput">ManagedKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersionInput">MinDecryptionVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersionInput">MinEncryptionVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSetInput">ParameterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackup">AllowPlaintextBackup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryption">ConvergentEncryption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowed">DeletionAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derived">Derived</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportable">Exportable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEc">HybridKeyTypeEc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqc">HybridKeyTypePqc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySize">KeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyId">ManagedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyName">ManagedKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersion">MinEncryptionVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSet">ParameterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keys"></a>

```csharp
public StringMapList Keys { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.latestVersion"></a>

```csharp
public double LatestVersion { get; }
```

- *Type:* double

---

##### `MinAvailableVersion`<sup>Required</sup> <a name="MinAvailableVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minAvailableVersion"></a>

```csharp
public double MinAvailableVersion { get; }
```

- *Type:* double

---

##### `SupportsDecryption`<sup>Required</sup> <a name="SupportsDecryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDecryption"></a>

```csharp
public IResolvable SupportsDecryption { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportsDerivation`<sup>Required</sup> <a name="SupportsDerivation" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDerivation"></a>

```csharp
public IResolvable SupportsDerivation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportsEncryption`<sup>Required</sup> <a name="SupportsEncryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsEncryption"></a>

```csharp
public IResolvable SupportsEncryption { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportsSigning`<sup>Required</sup> <a name="SupportsSigning" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsSigning"></a>

```csharp
public IResolvable SupportsSigning { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AllowPlaintextBackupInput`<sup>Optional</sup> <a name="AllowPlaintextBackupInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackupInput"></a>

```csharp
public bool|IResolvable AllowPlaintextBackupInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoRotatePeriodInput`<sup>Optional</sup> <a name="AutoRotatePeriodInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriodInput"></a>

```csharp
public double AutoRotatePeriodInput { get; }
```

- *Type:* double

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `ConvergentEncryptionInput`<sup>Optional</sup> <a name="ConvergentEncryptionInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryptionInput"></a>

```csharp
public bool|IResolvable ConvergentEncryptionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionAllowedInput`<sup>Optional</sup> <a name="DeletionAllowedInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowedInput"></a>

```csharp
public bool|IResolvable DeletionAllowedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DerivedInput`<sup>Optional</sup> <a name="DerivedInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derivedInput"></a>

```csharp
public bool|IResolvable DerivedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExportableInput`<sup>Optional</sup> <a name="ExportableInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportableInput"></a>

```csharp
public bool|IResolvable ExportableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HybridKeyTypeEcInput`<sup>Optional</sup> <a name="HybridKeyTypeEcInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEcInput"></a>

```csharp
public string HybridKeyTypeEcInput { get; }
```

- *Type:* string

---

##### `HybridKeyTypePqcInput`<sup>Optional</sup> <a name="HybridKeyTypePqcInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqcInput"></a>

```csharp
public string HybridKeyTypePqcInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySizeInput"></a>

```csharp
public double KeySizeInput { get; }
```

- *Type:* double

---

##### `ManagedKeyIdInput`<sup>Optional</sup> <a name="ManagedKeyIdInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyIdInput"></a>

```csharp
public string ManagedKeyIdInput { get; }
```

- *Type:* string

---

##### `ManagedKeyNameInput`<sup>Optional</sup> <a name="ManagedKeyNameInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyNameInput"></a>

```csharp
public string ManagedKeyNameInput { get; }
```

- *Type:* string

---

##### `MinDecryptionVersionInput`<sup>Optional</sup> <a name="MinDecryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersionInput"></a>

```csharp
public double MinDecryptionVersionInput { get; }
```

- *Type:* double

---

##### `MinEncryptionVersionInput`<sup>Optional</sup> <a name="MinEncryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersionInput"></a>

```csharp
public double MinEncryptionVersionInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ParameterSetInput`<sup>Optional</sup> <a name="ParameterSetInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSetInput"></a>

```csharp
public string ParameterSetInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AllowPlaintextBackup`<sup>Required</sup> <a name="AllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackup"></a>

```csharp
public bool|IResolvable AllowPlaintextBackup { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoRotatePeriod`<sup>Required</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriod"></a>

```csharp
public double AutoRotatePeriod { get; }
```

- *Type:* double

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `ConvergentEncryption`<sup>Required</sup> <a name="ConvergentEncryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryption"></a>

```csharp
public bool|IResolvable ConvergentEncryption { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionAllowed`<sup>Required</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowed"></a>

```csharp
public bool|IResolvable DeletionAllowed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Derived`<sup>Required</sup> <a name="Derived" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derived"></a>

```csharp
public bool|IResolvable Derived { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportable"></a>

```csharp
public bool|IResolvable Exportable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HybridKeyTypeEc`<sup>Required</sup> <a name="HybridKeyTypeEc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEc"></a>

```csharp
public string HybridKeyTypeEc { get; }
```

- *Type:* string

---

##### `HybridKeyTypePqc`<sup>Required</sup> <a name="HybridKeyTypePqc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqc"></a>

```csharp
public string HybridKeyTypePqc { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySize"></a>

```csharp
public double KeySize { get; }
```

- *Type:* double

---

##### `ManagedKeyId`<sup>Required</sup> <a name="ManagedKeyId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyId"></a>

```csharp
public string ManagedKeyId { get; }
```

- *Type:* string

---

##### `ManagedKeyName`<sup>Required</sup> <a name="ManagedKeyName" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.managedKeyName"></a>

```csharp
public string ManagedKeyName { get; }
```

- *Type:* string

---

##### `MinDecryptionVersion`<sup>Required</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersion"></a>

```csharp
public double MinDecryptionVersion { get; }
```

- *Type:* double

---

##### `MinEncryptionVersion`<sup>Required</sup> <a name="MinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersion"></a>

```csharp
public double MinEncryptionVersion { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ParameterSet`<sup>Required</sup> <a name="ParameterSet" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSet"></a>

```csharp
public string ParameterSet { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransitSecretBackendKeyConfig <a name="TransitSecretBackendKeyConfig" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransitSecretBackendKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Backend,
    string Name,
    bool|IResolvable AllowPlaintextBackup = null,
    double AutoRotatePeriod = null,
    string Context = null,
    bool|IResolvable ConvergentEncryption = null,
    bool|IResolvable DeletionAllowed = null,
    bool|IResolvable Derived = null,
    bool|IResolvable Exportable = null,
    string HybridKeyTypeEc = null,
    string HybridKeyTypePqc = null,
    string Id = null,
    double KeySize = null,
    string ManagedKeyId = null,
    string ManagedKeyName = null,
    double MinDecryptionVersion = null,
    double MinEncryptionVersion = null,
    string Namespace = null,
    string ParameterSet = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.backend">Backend</a></code> | <code>string</code> | The Transit secret backend the resource belongs to. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.name">Name</a></code> | <code>string</code> | Name of the encryption key to create. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.allowPlaintextBackup">AllowPlaintextBackup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotatePeriod">AutoRotatePeriod</a></code> | <code>double</code> | Amount of seconds the key should live before being automatically rotated. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.context">Context</a></code> | <code>string</code> | Base64 encoded context for key derivation. Required if derived is set to true. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.convergentEncryption">ConvergentEncryption</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.deletionAllowed">DeletionAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.derived">Derived</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies if key derivation is to be used. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.exportable">Exportable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables keys to be exportable. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypeEc">HybridKeyTypeEc</a></code> | <code>string</code> | The elliptic curve algorithm to use for hybrid signatures. Supported key types are `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, and `ed25519`. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypePqc">HybridKeyTypePqc</a></code> | <code>string</code> | The post-quantum algorithm to use for hybrid signatures. Currently, ML-DSA is the only supported key type. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.keySize">KeySize</a></code> | <code>double</code> | The key size in bytes for algorithms that allow variable key sizes. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.managedKeyId">ManagedKeyId</a></code> | <code>string</code> | The UUID of the managed key to use when the key type is managed_key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.managedKeyName">ManagedKeyName</a></code> | <code>string</code> | The name of the managed key to use when the key type is managed_key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minDecryptionVersion">MinDecryptionVersion</a></code> | <code>double</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minEncryptionVersion">MinEncryptionVersion</a></code> | <code>double</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.parameterSet">ParameterSet</a></code> | <code>string</code> | The parameter set to use for ML-DSA. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.type">Type</a></code> | <code>string</code> | Specifies the type of key to create. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The Transit secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#backend TransitSecretBackendKey#backend}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the encryption key to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#name TransitSecretBackendKey#name}

---

##### `AllowPlaintextBackup`<sup>Optional</sup> <a name="AllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.allowPlaintextBackup"></a>

```csharp
public bool|IResolvable AllowPlaintextBackup { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#allow_plaintext_backup TransitSecretBackendKey#allow_plaintext_backup}

---

##### `AutoRotatePeriod`<sup>Optional</sup> <a name="AutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotatePeriod"></a>

```csharp
public double AutoRotatePeriod { get; set; }
```

- *Type:* double

Amount of seconds the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#auto_rotate_period TransitSecretBackendKey#auto_rotate_period}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

Base64 encoded context for key derivation. Required if derived is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#context TransitSecretBackendKey#context}

---

##### `ConvergentEncryption`<sup>Optional</sup> <a name="ConvergentEncryption" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.convergentEncryption"></a>

```csharp
public bool|IResolvable ConvergentEncryption { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext.

This requires derived to be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#convergent_encryption TransitSecretBackendKey#convergent_encryption}

---

##### `DeletionAllowed`<sup>Optional</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.deletionAllowed"></a>

```csharp
public bool|IResolvable DeletionAllowed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#deletion_allowed TransitSecretBackendKey#deletion_allowed}

---

##### `Derived`<sup>Optional</sup> <a name="Derived" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.derived"></a>

```csharp
public bool|IResolvable Derived { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies if key derivation is to be used.

If enabled, all encrypt/decrypt requests to this key must provide a context which is used for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#derived TransitSecretBackendKey#derived}

---

##### `Exportable`<sup>Optional</sup> <a name="Exportable" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.exportable"></a>

```csharp
public bool|IResolvable Exportable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables keys to be exportable.

This allows for all the valid keys in the key ring to be exported. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#exportable TransitSecretBackendKey#exportable}

---

##### `HybridKeyTypeEc`<sup>Optional</sup> <a name="HybridKeyTypeEc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypeEc"></a>

```csharp
public string HybridKeyTypeEc { get; set; }
```

- *Type:* string

The elliptic curve algorithm to use for hybrid signatures. Supported key types are `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, and `ed25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#hybrid_key_type_ec TransitSecretBackendKey#hybrid_key_type_ec}

---

##### `HybridKeyTypePqc`<sup>Optional</sup> <a name="HybridKeyTypePqc" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypePqc"></a>

```csharp
public string HybridKeyTypePqc { get; set; }
```

- *Type:* string

The post-quantum algorithm to use for hybrid signatures. Currently, ML-DSA is the only supported key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#hybrid_key_type_pqc TransitSecretBackendKey#hybrid_key_type_pqc}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.keySize"></a>

```csharp
public double KeySize { get; set; }
```

- *Type:* double

The key size in bytes for algorithms that allow variable key sizes.

Currently only applicable to HMAC; this value must be between 32 and 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#key_size TransitSecretBackendKey#key_size}

---

##### `ManagedKeyId`<sup>Optional</sup> <a name="ManagedKeyId" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.managedKeyId"></a>

```csharp
public string ManagedKeyId { get; set; }
```

- *Type:* string

The UUID of the managed key to use when the key type is managed_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#managed_key_id TransitSecretBackendKey#managed_key_id}

---

##### `ManagedKeyName`<sup>Optional</sup> <a name="ManagedKeyName" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.managedKeyName"></a>

```csharp
public string ManagedKeyName { get; set; }
```

- *Type:* string

The name of the managed key to use when the key type is managed_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#managed_key_name TransitSecretBackendKey#managed_key_name}

---

##### `MinDecryptionVersion`<sup>Optional</sup> <a name="MinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minDecryptionVersion"></a>

```csharp
public double MinDecryptionVersion { get; set; }
```

- *Type:* double

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#min_decryption_version TransitSecretBackendKey#min_decryption_version}

---

##### `MinEncryptionVersion`<sup>Optional</sup> <a name="MinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minEncryptionVersion"></a>

```csharp
public double MinEncryptionVersion { get; set; }
```

- *Type:* double

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#min_encryption_version TransitSecretBackendKey#min_encryption_version}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#namespace TransitSecretBackendKey#namespace}

---

##### `ParameterSet`<sup>Optional</sup> <a name="ParameterSet" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.parameterSet"></a>

```csharp
public string ParameterSet { get; set; }
```

- *Type:* string

The parameter set to use for ML-DSA.

Required for ML-DSA and hybrid keys.  Valid values for ML-DSA are `44`, `65`, and `87`. Valid values for SLH-DSA are `slh-dsa-sha2-128s`, `slh-dsa-shake-128s`, `slh-dsa-sha2-128f`, `slh-dsa-shake-128`, `slh-dsa-sha2-192s`, `slh-dsa-shake-192s`, `slh-dsa-sha2-192f`, `slh-dsa-shake-192f`, `slh-dsa-sha2-256s`, `slh-dsa-shake-256s`, `slh-dsa-sha2-256f`, and `slh-dsa-shake-256f`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#parameter_set TransitSecretBackendKey#parameter_set}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies the type of key to create.

The currently-supported types are: `aes128-gcm96`, `aes256-gcm96` (default), `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `hmac`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `managed_key`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`, `ml-dsa`, `hybrid`, and `slh-dsa`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/transit_secret_backend_key#type TransitSecretBackendKey#type}

---



