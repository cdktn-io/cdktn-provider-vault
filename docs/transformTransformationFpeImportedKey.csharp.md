# `transformTransformationFpeImportedKey` Submodule <a name="`transformTransformationFpeImportedKey` Submodule" id="@cdktn/provider-vault.transformTransformationFpeImportedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationFpeImportedKey <a name="TransformTransformationFpeImportedKey" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key vault_transform_transformation_fpe_imported_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransformTransformationFpeImportedKey(Construct Scope, string Id, TransformTransformationFpeImportedKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig">TransformTransformationFpeImportedKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig">TransformTransformationFpeImportedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetCiphertextWo">ResetCiphertextWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetCiphertextWoVersion">ResetCiphertextWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetDeletionAllowed">ResetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetHashFunction">ResetHashFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetMaxTweakLen">ResetMaxTweakLen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetTweakSource">ResetTweakSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetCiphertextWo` <a name="ResetCiphertextWo" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetCiphertextWo"></a>

```csharp
private void ResetCiphertextWo()
```

##### `ResetCiphertextWoVersion` <a name="ResetCiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetCiphertextWoVersion"></a>

```csharp
private void ResetCiphertextWoVersion()
```

##### `ResetDeletionAllowed` <a name="ResetDeletionAllowed" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetDeletionAllowed"></a>

```csharp
private void ResetDeletionAllowed()
```

##### `ResetHashFunction` <a name="ResetHashFunction" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetHashFunction"></a>

```csharp
private void ResetHashFunction()
```

##### `ResetMaxTweakLen` <a name="ResetMaxTweakLen" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetMaxTweakLen"></a>

```csharp
private void ResetMaxTweakLen()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTweakSource` <a name="ResetTweakSource" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.resetTweakSource"></a>

```csharp
private void ResetTweakSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationFpeImportedKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationFpeImportedKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationFpeImportedKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationFpeImportedKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationFpeImportedKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TransformTransformationFpeImportedKey resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransformTransformationFpeImportedKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransformTransformationFpeImportedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationFpeImportedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.fpeAlgorithm">FpeAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWoInput">CiphertextWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWoVersionInput">CiphertextWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.deletionAllowedInput">DeletionAllowedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.hashFunctionInput">HashFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.maxTweakLenInput">MaxTweakLenInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.templateInput">TemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.tweakSourceInput">TweakSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWo">CiphertextWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWoVersion">CiphertextWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.deletionAllowed">DeletionAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.hashFunction">HashFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.maxTweakLen">MaxTweakLen</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.template">Template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.tweakSource">TweakSource</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FpeAlgorithm`<sup>Required</sup> <a name="FpeAlgorithm" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.fpeAlgorithm"></a>

```csharp
public string FpeAlgorithm { get; }
```

- *Type:* string

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `CiphertextWoInput`<sup>Optional</sup> <a name="CiphertextWoInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWoInput"></a>

```csharp
public string CiphertextWoInput { get; }
```

- *Type:* string

---

##### `CiphertextWoVersionInput`<sup>Optional</sup> <a name="CiphertextWoVersionInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWoVersionInput"></a>

```csharp
public double CiphertextWoVersionInput { get; }
```

- *Type:* double

---

##### `DeletionAllowedInput`<sup>Optional</sup> <a name="DeletionAllowedInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.deletionAllowedInput"></a>

```csharp
public bool|IResolvable DeletionAllowedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HashFunctionInput`<sup>Optional</sup> <a name="HashFunctionInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.hashFunctionInput"></a>

```csharp
public string HashFunctionInput { get; }
```

- *Type:* string

---

##### `MaxTweakLenInput`<sup>Optional</sup> <a name="MaxTweakLenInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.maxTweakLenInput"></a>

```csharp
public double MaxTweakLenInput { get; }
```

- *Type:* double

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.templateInput"></a>

```csharp
public string TemplateInput { get; }
```

- *Type:* string

---

##### `TweakSourceInput`<sup>Optional</sup> <a name="TweakSourceInput" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.tweakSourceInput"></a>

```csharp
public string TweakSourceInput { get; }
```

- *Type:* string

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### ~~`CiphertextWo`~~<sup>Required</sup> <a name="CiphertextWo" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string CiphertextWo { get; }
```

- *Type:* string

---

##### `CiphertextWoVersion`<sup>Required</sup> <a name="CiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.ciphertextWoVersion"></a>

```csharp
public double CiphertextWoVersion { get; }
```

- *Type:* double

---

##### `DeletionAllowed`<sup>Required</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.deletionAllowed"></a>

```csharp
public bool|IResolvable DeletionAllowed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HashFunction`<sup>Required</sup> <a name="HashFunction" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.hashFunction"></a>

```csharp
public string HashFunction { get; }
```

- *Type:* string

---

##### `MaxTweakLen`<sup>Required</sup> <a name="MaxTweakLen" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.maxTweakLen"></a>

```csharp
public double MaxTweakLen { get; }
```

- *Type:* double

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.template"></a>

```csharp
public string Template { get; }
```

- *Type:* string

---

##### `TweakSource`<sup>Required</sup> <a name="TweakSource" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.tweakSource"></a>

```csharp
public string TweakSource { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationFpeImportedKeyConfig <a name="TransformTransformationFpeImportedKeyConfig" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransformTransformationFpeImportedKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    string Name,
    string Template,
    string[] AllowedRoles = null,
    string CiphertextWo = null,
    double CiphertextWoVersion = null,
    bool|IResolvable DeletionAllowed = null,
    string HashFunction = null,
    double MaxTweakLen = null,
    string Namespace = null,
    string TweakSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.mount">Mount</a></code> | <code>string</code> | Path where the Transform secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.name">Name</a></code> | <code>string</code> | Name of the transformation to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.template">Template</a></code> | <code>string</code> | The name of the template to use. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | The list of roles allowed to perform this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.ciphertextWo">CiphertextWo</a></code> | <code>string</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.ciphertextWoVersion">CiphertextWoVersion</a></code> | <code>double</code> | Version identifier for `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.deletionAllowed">DeletionAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, this transformation can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.hashFunction">HashFunction</a></code> | <code>string</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.maxTweakLen">MaxTweakLen</a></code> | <code>double</code> | The maximum tweak length in bytes (0-32). |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.tweakSource">TweakSource</a></code> | <code>string</code> | The source of the tweak value (`supplied`, `generated` or `internal`). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path where the Transform secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#mount TransformTransformationFpeImportedKey#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the transformation to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#name TransformTransformationFpeImportedKey#name}

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.template"></a>

```csharp
public string Template { get; set; }
```

- *Type:* string

The name of the template to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#template TransformTransformationFpeImportedKey#template}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

The list of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#allowed_roles TransformTransformationFpeImportedKey#allowed_roles}

---

##### `CiphertextWo`<sup>Optional</sup> <a name="CiphertextWo" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.ciphertextWo"></a>

```csharp
public string CiphertextWo { get; set; }
```

- *Type:* string

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only).

Required with `ciphertext_wo_version`. Required to create the transformation, but may be omitted for a transformation adopted with `terraform import`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#ciphertext_wo TransformTransformationFpeImportedKey#ciphertext_wo}

---

##### `CiphertextWoVersion`<sup>Optional</sup> <a name="CiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.ciphertextWoVersion"></a>

```csharp
public double CiphertextWoVersion { get; set; }
```

- *Type:* double

Version identifier for `ciphertext_wo`.

Vault imports ciphertext on create; changing this value replaces the transformation. Removing it does not replace the resource. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#ciphertext_wo_version TransformTransformationFpeImportedKey#ciphertext_wo_version}

---

##### `DeletionAllowed`<sup>Optional</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.deletionAllowed"></a>

```csharp
public bool|IResolvable DeletionAllowed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, this transformation can be deleted.

Deletion is blocked while this is false, so it must be applied as `true` before the resource can be destroyed. Vault's import endpoint does not accept this parameter, so it is applied in an update immediately after the key is imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#deletion_allowed TransformTransformationFpeImportedKey#deletion_allowed}

---

##### `HashFunction`<sup>Optional</sup> <a name="HashFunction" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.hashFunction"></a>

```csharp
public string HashFunction { get; set; }
```

- *Type:* string

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set. Vault does not return this value, so it is not verified against the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#hash_function TransformTransformationFpeImportedKey#hash_function}

---

##### `MaxTweakLen`<sup>Optional</sup> <a name="MaxTweakLen" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.maxTweakLen"></a>

```csharp
public double MaxTweakLen { get; set; }
```

- *Type:* double

The maximum tweak length in bytes (0-32).

If the value is 0, the tweak length can be any value from 0 to 32 bytes. Vault does not allow this field to be changed after creation, so changing it returns an error from Vault. Requires Vault 2.2.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#max_tweak_len TransformTransformationFpeImportedKey#max_tweak_len}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#namespace TransformTransformationFpeImportedKey#namespace}

---

##### `TweakSource`<sup>Optional</sup> <a name="TweakSource" id="@cdktn/provider-vault.transformTransformationFpeImportedKey.TransformTransformationFpeImportedKeyConfig.property.tweakSource"></a>

```csharp
public string TweakSource { get; set; }
```

- *Type:* string

The source of the tweak value (`supplied`, `generated` or `internal`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#tweak_source TransformTransformationFpeImportedKey#tweak_source}

---



