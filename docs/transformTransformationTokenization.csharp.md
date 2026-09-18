# `transformTransformationTokenization` Submodule <a name="`transformTransformationTokenization` Submodule" id="@cdktn/provider-vault.transformTransformationTokenization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenization <a name="TransformTransformationTokenization" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization vault_transform_transformation_tokenization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransformTransformationTokenization(Construct Scope, string Id, TransformTransformationTokenizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig">TransformTransformationTokenizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig">TransformTransformationTokenizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetAllowedRoles">ResetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetConvergent">ResetConvergent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetDeletionAllowed">ResetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMappingMode">ResetMappingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetStores">ResetStores</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedRoles` <a name="ResetAllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetAllowedRoles"></a>

```csharp
private void ResetAllowedRoles()
```

##### `ResetConvergent` <a name="ResetConvergent" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetConvergent"></a>

```csharp
private void ResetConvergent()
```

##### `ResetDeletionAllowed` <a name="ResetDeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetDeletionAllowed"></a>

```csharp
private void ResetDeletionAllowed()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMappingMode` <a name="ResetMappingMode" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMappingMode"></a>

```csharp
private void ResetMappingMode()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetStores` <a name="ResetStores" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.resetStores"></a>

```csharp
private void ResetStores()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationTokenization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationTokenization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationTokenization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationTokenization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

TransformTransformationTokenization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TransformTransformationTokenization resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransformTransformationTokenization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransformTransformationTokenization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRolesInput">AllowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergentInput">ConvergentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowedInput">DeletionAllowedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingModeInput">MappingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtlInput">MaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.storesInput">StoresInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergent">Convergent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowed">DeletionAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingMode">MappingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.stores">Stores</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowedRolesInput`<sup>Optional</sup> <a name="AllowedRolesInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRolesInput"></a>

```csharp
public string[] AllowedRolesInput { get; }
```

- *Type:* string[]

---

##### `ConvergentInput`<sup>Optional</sup> <a name="ConvergentInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergentInput"></a>

```csharp
public bool|IResolvable ConvergentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionAllowedInput`<sup>Optional</sup> <a name="DeletionAllowedInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowedInput"></a>

```csharp
public bool|IResolvable DeletionAllowedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MappingModeInput`<sup>Optional</sup> <a name="MappingModeInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingModeInput"></a>

```csharp
public string MappingModeInput { get; }
```

- *Type:* string

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtlInput"></a>

```csharp
public double MaxTtlInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `StoresInput`<sup>Optional</sup> <a name="StoresInput" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.storesInput"></a>

```csharp
public string[] StoresInput { get; }
```

- *Type:* string[]

---

##### `AllowedRoles`<sup>Required</sup> <a name="AllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; }
```

- *Type:* string[]

---

##### `Convergent`<sup>Required</sup> <a name="Convergent" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.convergent"></a>

```csharp
public bool|IResolvable Convergent { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeletionAllowed`<sup>Required</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.deletionAllowed"></a>

```csharp
public bool|IResolvable DeletionAllowed { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MappingMode`<sup>Required</sup> <a name="MappingMode" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.mappingMode"></a>

```csharp
public string MappingMode { get; }
```

- *Type:* string

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Stores`<sup>Required</sup> <a name="Stores" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.stores"></a>

```csharp
public string[] Stores { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationConfig <a name="TransformTransformationTokenizationConfig" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new TransformTransformationTokenizationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Path,
    string[] AllowedRoles = null,
    bool|IResolvable Convergent = null,
    bool|IResolvable DeletionAllowed = null,
    string Id = null,
    string MappingMode = null,
    double MaxTtl = null,
    string Namespace = null,
    string[] Stores = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.name">Name</a></code> | <code>string</code> | The name of the transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.path">Path</a></code> | <code>string</code> | The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.allowedRoles">AllowedRoles</a></code> | <code>string[]</code> | Specifies a list of allowed roles that this transformation can be assigned to. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.convergent">Convergent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to use convergent tokenization, where tokenization of the same plaintext more than once results in the same token. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.deletionAllowed">DeletionAllowed</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, this transform can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#id TransformTransformationTokenization#id}. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.mappingMode">MappingMode</a></code> | <code>string</code> | Specifies the mapping mode for stored tokenization values. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.maxTtl">MaxTtl</a></code> | <code>double</code> | The maximum TTL of a token. If 0 or unspecified, tokens may have no expiration. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.stores">Stores</a></code> | <code>string[]</code> | The list of tokenization stores to use for tokenization state. Vault's internal storage is used by default. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#name TransformTransformationTokenization#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#path TransformTransformationTokenization#path}

---

##### `AllowedRoles`<sup>Optional</sup> <a name="AllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.allowedRoles"></a>

```csharp
public string[] AllowedRoles { get; set; }
```

- *Type:* string[]

Specifies a list of allowed roles that this transformation can be assigned to.

A role using this transformation must exist in this list in order for encode and decode operations to properly function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#allowed_roles TransformTransformationTokenization#allowed_roles}

---

##### `Convergent`<sup>Optional</sup> <a name="Convergent" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.convergent"></a>

```csharp
public bool|IResolvable Convergent { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to use convergent tokenization, where tokenization of the same plaintext more than once results in the same token.

Defaults to false as unique tokens are more desirable from a security standpoint if there isn't a use-case need for convergence. This property cannot be changed after the transform is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#convergent TransformTransformationTokenization#convergent}

---

##### `DeletionAllowed`<sup>Optional</sup> <a name="DeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.deletionAllowed"></a>

```csharp
public bool|IResolvable DeletionAllowed { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, this transform can be deleted.

Otherwise deletion is blocked while this value remains false. Note that deleting the transform deletes the underlying key making decoding of tokenized values impossible without restoring from a backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#deletion_allowed TransformTransformationTokenization#deletion_allowed}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#id TransformTransformationTokenization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MappingMode`<sup>Optional</sup> <a name="MappingMode" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.mappingMode"></a>

```csharp
public string MappingMode { get; set; }
```

- *Type:* string

Specifies the mapping mode for stored tokenization values.

default is strongly recommended for highest security. exportable allows for all plaintexts to be decoded via the export-decoded endpoint in an emergency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#mapping_mode TransformTransformationTokenization#mapping_mode}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.maxTtl"></a>

```csharp
public double MaxTtl { get; set; }
```

- *Type:* double

The maximum TTL of a token. If 0 or unspecified, tokens may have no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#max_ttl TransformTransformationTokenization#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#namespace TransformTransformationTokenization#namespace}

---

##### `Stores`<sup>Optional</sup> <a name="Stores" id="@cdktn/provider-vault.transformTransformationTokenization.TransformTransformationTokenizationConfig.property.stores"></a>

```csharp
public string[] Stores { get; set; }
```

- *Type:* string[]

The list of tokenization stores to use for tokenization state. Vault's internal storage is used by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#stores TransformTransformationTokenization#stores}

---



