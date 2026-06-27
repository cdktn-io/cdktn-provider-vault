# `awsAuthBackendRole` Submodule <a name="`awsAuthBackendRole` Submodule" id="@cdktn/provider-vault.awsAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendRole <a name="AwsAuthBackendRole" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role vault_aws_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AwsAuthBackendRole(Construct Scope, string Id, AwsAuthBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig">AwsAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig">AwsAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAliasMetadata">ResetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAllowInstanceMigration">ResetAllowInstanceMigration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAccountIds">ResetBoundAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAmiIds">ResetBoundAmiIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundEc2InstanceIds">ResetBoundEc2InstanceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamInstanceProfileArns">ResetBoundIamInstanceProfileArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamPrincipalArns">ResetBoundIamPrincipalArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamRoleArns">ResetBoundIamRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundRegions">ResetBoundRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundSubnetIds">ResetBoundSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundVpcIds">ResetBoundVpcIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetDisallowReauthentication">ResetDisallowReauthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredAwsRegion">ResetInferredAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredEntityType">ResetInferredEntityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetResolveAwsUniqueIds">ResetResolveAwsUniqueIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetRoleTag">ResetRoleTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenBoundCidrs">ResetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenExplicitMaxTtl">ResetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenMaxTtl">ResetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNoDefaultPolicy">ResetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNumUses">ResetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPeriod">ResetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPolicies">ResetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAliasMetadata` <a name="ResetAliasMetadata" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAliasMetadata"></a>

```csharp
private void ResetAliasMetadata()
```

##### `ResetAllowInstanceMigration` <a name="ResetAllowInstanceMigration" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAllowInstanceMigration"></a>

```csharp
private void ResetAllowInstanceMigration()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetBackend` <a name="ResetBackend" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetBoundAccountIds` <a name="ResetBoundAccountIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAccountIds"></a>

```csharp
private void ResetBoundAccountIds()
```

##### `ResetBoundAmiIds` <a name="ResetBoundAmiIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAmiIds"></a>

```csharp
private void ResetBoundAmiIds()
```

##### `ResetBoundEc2InstanceIds` <a name="ResetBoundEc2InstanceIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundEc2InstanceIds"></a>

```csharp
private void ResetBoundEc2InstanceIds()
```

##### `ResetBoundIamInstanceProfileArns` <a name="ResetBoundIamInstanceProfileArns" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamInstanceProfileArns"></a>

```csharp
private void ResetBoundIamInstanceProfileArns()
```

##### `ResetBoundIamPrincipalArns` <a name="ResetBoundIamPrincipalArns" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamPrincipalArns"></a>

```csharp
private void ResetBoundIamPrincipalArns()
```

##### `ResetBoundIamRoleArns` <a name="ResetBoundIamRoleArns" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamRoleArns"></a>

```csharp
private void ResetBoundIamRoleArns()
```

##### `ResetBoundRegions` <a name="ResetBoundRegions" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundRegions"></a>

```csharp
private void ResetBoundRegions()
```

##### `ResetBoundSubnetIds` <a name="ResetBoundSubnetIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundSubnetIds"></a>

```csharp
private void ResetBoundSubnetIds()
```

##### `ResetBoundVpcIds` <a name="ResetBoundVpcIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundVpcIds"></a>

```csharp
private void ResetBoundVpcIds()
```

##### `ResetDisallowReauthentication` <a name="ResetDisallowReauthentication" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetDisallowReauthentication"></a>

```csharp
private void ResetDisallowReauthentication()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInferredAwsRegion` <a name="ResetInferredAwsRegion" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredAwsRegion"></a>

```csharp
private void ResetInferredAwsRegion()
```

##### `ResetInferredEntityType` <a name="ResetInferredEntityType" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredEntityType"></a>

```csharp
private void ResetInferredEntityType()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetResolveAwsUniqueIds` <a name="ResetResolveAwsUniqueIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetResolveAwsUniqueIds"></a>

```csharp
private void ResetResolveAwsUniqueIds()
```

##### `ResetRoleTag` <a name="ResetRoleTag" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetRoleTag"></a>

```csharp
private void ResetRoleTag()
```

##### `ResetTokenBoundCidrs` <a name="ResetTokenBoundCidrs" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenBoundCidrs"></a>

```csharp
private void ResetTokenBoundCidrs()
```

##### `ResetTokenExplicitMaxTtl` <a name="ResetTokenExplicitMaxTtl" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```csharp
private void ResetTokenExplicitMaxTtl()
```

##### `ResetTokenMaxTtl` <a name="ResetTokenMaxTtl" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenMaxTtl"></a>

```csharp
private void ResetTokenMaxTtl()
```

##### `ResetTokenNoDefaultPolicy` <a name="ResetTokenNoDefaultPolicy" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```csharp
private void ResetTokenNoDefaultPolicy()
```

##### `ResetTokenNumUses` <a name="ResetTokenNumUses" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNumUses"></a>

```csharp
private void ResetTokenNumUses()
```

##### `ResetTokenPeriod` <a name="ResetTokenPeriod" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPeriod"></a>

```csharp
private void ResetTokenPeriod()
```

##### `ResetTokenPolicies` <a name="ResetTokenPolicies" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPolicies"></a>

```csharp
private void ResetTokenPolicies()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenTtl"></a>

```csharp
private void ResetTokenTtl()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenType"></a>

```csharp
private void ResetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AwsAuthBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AwsAuthBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AwsAuthBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AwsAuthBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AwsAuthBackendRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AwsAuthBackendRole resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsAuthBackendRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.aliasMetadataInput">AliasMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigrationInput">AllowInstanceMigrationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIdsInput">BoundAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIdsInput">BoundAmiIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIdsInput">BoundEc2InstanceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArnsInput">BoundIamInstanceProfileArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArnsInput">BoundIamPrincipalArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArnsInput">BoundIamRoleArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegionsInput">BoundRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIdsInput">BoundSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIdsInput">BoundVpcIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthenticationInput">DisallowReauthenticationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegionInput">InferredAwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityTypeInput">InferredEntityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIdsInput">ResolveAwsUniqueIdsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTagInput">RoleTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrsInput">TokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtlInput">TokenExplicitMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtlInput">TokenMaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicyInput">TokenNoDefaultPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUsesInput">TokenNumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriodInput">TokenPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPoliciesInput">TokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtlInput">TokenTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigration">AllowInstanceMigration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIds">BoundAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIds">BoundAmiIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIds">BoundEc2InstanceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArns">BoundIamInstanceProfileArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArns">BoundIamPrincipalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArns">BoundIamRoleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegions">BoundRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIds">BoundSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIds">BoundVpcIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthentication">DisallowReauthentication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegion">InferredAwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityType">InferredEntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIds">ResolveAwsUniqueIds</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTag">RoleTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

##### `AliasMetadataInput`<sup>Optional</sup> <a name="AliasMetadataInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.aliasMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowInstanceMigrationInput`<sup>Optional</sup> <a name="AllowInstanceMigrationInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigrationInput"></a>

```csharp
public bool|IResolvable AllowInstanceMigrationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `BoundAccountIdsInput`<sup>Optional</sup> <a name="BoundAccountIdsInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIdsInput"></a>

```csharp
public string[] BoundAccountIdsInput { get; }
```

- *Type:* string[]

---

##### `BoundAmiIdsInput`<sup>Optional</sup> <a name="BoundAmiIdsInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIdsInput"></a>

```csharp
public string[] BoundAmiIdsInput { get; }
```

- *Type:* string[]

---

##### `BoundEc2InstanceIdsInput`<sup>Optional</sup> <a name="BoundEc2InstanceIdsInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIdsInput"></a>

```csharp
public string[] BoundEc2InstanceIdsInput { get; }
```

- *Type:* string[]

---

##### `BoundIamInstanceProfileArnsInput`<sup>Optional</sup> <a name="BoundIamInstanceProfileArnsInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArnsInput"></a>

```csharp
public string[] BoundIamInstanceProfileArnsInput { get; }
```

- *Type:* string[]

---

##### `BoundIamPrincipalArnsInput`<sup>Optional</sup> <a name="BoundIamPrincipalArnsInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArnsInput"></a>

```csharp
public string[] BoundIamPrincipalArnsInput { get; }
```

- *Type:* string[]

---

##### `BoundIamRoleArnsInput`<sup>Optional</sup> <a name="BoundIamRoleArnsInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArnsInput"></a>

```csharp
public string[] BoundIamRoleArnsInput { get; }
```

- *Type:* string[]

---

##### `BoundRegionsInput`<sup>Optional</sup> <a name="BoundRegionsInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegionsInput"></a>

```csharp
public string[] BoundRegionsInput { get; }
```

- *Type:* string[]

---

##### `BoundSubnetIdsInput`<sup>Optional</sup> <a name="BoundSubnetIdsInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIdsInput"></a>

```csharp
public string[] BoundSubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `BoundVpcIdsInput`<sup>Optional</sup> <a name="BoundVpcIdsInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIdsInput"></a>

```csharp
public string[] BoundVpcIdsInput { get; }
```

- *Type:* string[]

---

##### `DisallowReauthenticationInput`<sup>Optional</sup> <a name="DisallowReauthenticationInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthenticationInput"></a>

```csharp
public bool|IResolvable DisallowReauthenticationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InferredAwsRegionInput`<sup>Optional</sup> <a name="InferredAwsRegionInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegionInput"></a>

```csharp
public string InferredAwsRegionInput { get; }
```

- *Type:* string

---

##### `InferredEntityTypeInput`<sup>Optional</sup> <a name="InferredEntityTypeInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityTypeInput"></a>

```csharp
public string InferredEntityTypeInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ResolveAwsUniqueIdsInput`<sup>Optional</sup> <a name="ResolveAwsUniqueIdsInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIdsInput"></a>

```csharp
public bool|IResolvable ResolveAwsUniqueIdsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `RoleTagInput`<sup>Optional</sup> <a name="RoleTagInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTagInput"></a>

```csharp
public string RoleTagInput { get; }
```

- *Type:* string

---

##### `TokenBoundCidrsInput`<sup>Optional</sup> <a name="TokenBoundCidrsInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrsInput"></a>

```csharp
public string[] TokenBoundCidrsInput { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="TokenExplicitMaxTtlInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```csharp
public double TokenExplicitMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenMaxTtlInput`<sup>Optional</sup> <a name="TokenMaxTtlInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtlInput"></a>

```csharp
public double TokenMaxTtlInput { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="TokenNoDefaultPolicyInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUsesInput`<sup>Optional</sup> <a name="TokenNumUsesInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUsesInput"></a>

```csharp
public double TokenNumUsesInput { get; }
```

- *Type:* double

---

##### `TokenPeriodInput`<sup>Optional</sup> <a name="TokenPeriodInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriodInput"></a>

```csharp
public double TokenPeriodInput { get; }
```

- *Type:* double

---

##### `TokenPoliciesInput`<sup>Optional</sup> <a name="TokenPoliciesInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPoliciesInput"></a>

```csharp
public string[] TokenPoliciesInput { get; }
```

- *Type:* string[]

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtlInput"></a>

```csharp
public double TokenTtlInput { get; }
```

- *Type:* double

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `AliasMetadata`<sup>Required</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowInstanceMigration`<sup>Required</sup> <a name="AllowInstanceMigration" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigration"></a>

```csharp
public bool|IResolvable AllowInstanceMigration { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `BoundAccountIds`<sup>Required</sup> <a name="BoundAccountIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIds"></a>

```csharp
public string[] BoundAccountIds { get; }
```

- *Type:* string[]

---

##### `BoundAmiIds`<sup>Required</sup> <a name="BoundAmiIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIds"></a>

```csharp
public string[] BoundAmiIds { get; }
```

- *Type:* string[]

---

##### `BoundEc2InstanceIds`<sup>Required</sup> <a name="BoundEc2InstanceIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIds"></a>

```csharp
public string[] BoundEc2InstanceIds { get; }
```

- *Type:* string[]

---

##### `BoundIamInstanceProfileArns`<sup>Required</sup> <a name="BoundIamInstanceProfileArns" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArns"></a>

```csharp
public string[] BoundIamInstanceProfileArns { get; }
```

- *Type:* string[]

---

##### `BoundIamPrincipalArns`<sup>Required</sup> <a name="BoundIamPrincipalArns" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArns"></a>

```csharp
public string[] BoundIamPrincipalArns { get; }
```

- *Type:* string[]

---

##### `BoundIamRoleArns`<sup>Required</sup> <a name="BoundIamRoleArns" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArns"></a>

```csharp
public string[] BoundIamRoleArns { get; }
```

- *Type:* string[]

---

##### `BoundRegions`<sup>Required</sup> <a name="BoundRegions" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegions"></a>

```csharp
public string[] BoundRegions { get; }
```

- *Type:* string[]

---

##### `BoundSubnetIds`<sup>Required</sup> <a name="BoundSubnetIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIds"></a>

```csharp
public string[] BoundSubnetIds { get; }
```

- *Type:* string[]

---

##### `BoundVpcIds`<sup>Required</sup> <a name="BoundVpcIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIds"></a>

```csharp
public string[] BoundVpcIds { get; }
```

- *Type:* string[]

---

##### `DisallowReauthentication`<sup>Required</sup> <a name="DisallowReauthentication" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthentication"></a>

```csharp
public bool|IResolvable DisallowReauthentication { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InferredAwsRegion`<sup>Required</sup> <a name="InferredAwsRegion" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegion"></a>

```csharp
public string InferredAwsRegion { get; }
```

- *Type:* string

---

##### `InferredEntityType`<sup>Required</sup> <a name="InferredEntityType" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityType"></a>

```csharp
public string InferredEntityType { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ResolveAwsUniqueIds`<sup>Required</sup> <a name="ResolveAwsUniqueIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIds"></a>

```csharp
public bool|IResolvable ResolveAwsUniqueIds { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `RoleTag`<sup>Required</sup> <a name="RoleTag" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTag"></a>

```csharp
public string RoleTag { get; }
```

- *Type:* string

---

##### `TokenBoundCidrs`<sup>Required</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; }
```

- *Type:* string[]

---

##### `TokenExplicitMaxTtl`<sup>Required</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; }
```

- *Type:* double

---

##### `TokenMaxTtl`<sup>Required</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; }
```

- *Type:* double

---

##### `TokenNoDefaultPolicy`<sup>Required</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenNumUses`<sup>Required</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; }
```

- *Type:* double

---

##### `TokenPeriod`<sup>Required</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; }
```

- *Type:* double

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendRoleConfig <a name="AwsAuthBackendRoleConfig" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AwsAuthBackendRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Role,
    System.Collections.Generic.IDictionary<string, string> AliasMetadata = null,
    bool|IResolvable AllowInstanceMigration = null,
    string AuthType = null,
    string Backend = null,
    string[] BoundAccountIds = null,
    string[] BoundAmiIds = null,
    string[] BoundEc2InstanceIds = null,
    string[] BoundIamInstanceProfileArns = null,
    string[] BoundIamPrincipalArns = null,
    string[] BoundIamRoleArns = null,
    string[] BoundRegions = null,
    string[] BoundSubnetIds = null,
    string[] BoundVpcIds = null,
    bool|IResolvable DisallowReauthentication = null,
    string Id = null,
    string InferredAwsRegion = null,
    string InferredEntityType = null,
    string Namespace = null,
    bool|IResolvable ResolveAwsUniqueIds = null,
    string RoleTag = null,
    string[] TokenBoundCidrs = null,
    double TokenExplicitMaxTtl = null,
    double TokenMaxTtl = null,
    bool|IResolvable TokenNoDefaultPolicy = null,
    double TokenNumUses = null,
    double TokenPeriod = null,
    string[] TokenPolicies = null,
    double TokenTtl = null,
    string TokenType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.role">Role</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.aliasMetadata">AliasMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The metadata to be tied to generated entity alias. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.allowInstanceMigration">AllowInstanceMigration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, allows migration of the underlying instance where the client resides. Use with caution. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.authType">AuthType</a></code> | <code>string</code> | The auth type permitted for this role. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAccountIds">BoundAccountIds</a></code> | <code>string[]</code> | Only EC2 instances with this account ID in their identity document will be permitted to log in. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAmiIds">BoundAmiIds</a></code> | <code>string[]</code> | Only EC2 instances using this AMI ID will be permitted to log in. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundEc2InstanceIds">BoundEc2InstanceIds</a></code> | <code>string[]</code> | Only EC2 instances that match this instance ID will be permitted to log in. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamInstanceProfileArns">BoundIamInstanceProfileArns</a></code> | <code>string[]</code> | Only EC2 instances associated with an IAM instance profile ARN that matches this value will be permitted to log in. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamPrincipalArns">BoundIamPrincipalArns</a></code> | <code>string[]</code> | The IAM principal that must be authenticated using the iam auth method. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamRoleArns">BoundIamRoleArns</a></code> | <code>string[]</code> | Only EC2 instances that match this IAM role ARN will be permitted to log in. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundRegions">BoundRegions</a></code> | <code>string[]</code> | Only EC2 instances in this region will be permitted to log in. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundSubnetIds">BoundSubnetIds</a></code> | <code>string[]</code> | Only EC2 instances associated with this subnet ID will be permitted to log in. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundVpcIds">BoundVpcIds</a></code> | <code>string[]</code> | Only EC2 instances associated with this VPC ID will be permitted to log in. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.disallowReauthentication">DisallowReauthentication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, only allows a single token to be granted per instance ID. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#id AwsAuthBackendRole#id}. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredAwsRegion">InferredAwsRegion</a></code> | <code>string</code> | The region to search for the inferred entities in. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredEntityType">InferredEntityType</a></code> | <code>string</code> | The type of inferencing Vault should do. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.resolveAwsUniqueIds">ResolveAwsUniqueIds</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether or not Vault should resolve the bound_iam_principal_arn to an AWS Unique ID. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.roleTag">RoleTag</a></code> | <code>string</code> | The key of the tag on EC2 instance to use for role tags. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenBoundCidrs">TokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenExplicitMaxTtl">TokenExplicitMaxTtl</a></code> | <code>double</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenMaxTtl">TokenMaxTtl</a></code> | <code>double</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNoDefaultPolicy">TokenNoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNumUses">TokenNumUses</a></code> | <code>double</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPeriod">TokenPeriod</a></code> | <code>double</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenType">TokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#role AwsAuthBackendRole#role}

---

##### `AliasMetadata`<sup>Optional</sup> <a name="AliasMetadata" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.aliasMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AliasMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The metadata to be tied to generated entity alias.

This should be a list or map containing the metadata in key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#alias_metadata AwsAuthBackendRole#alias_metadata}

---

##### `AllowInstanceMigration`<sup>Optional</sup> <a name="AllowInstanceMigration" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.allowInstanceMigration"></a>

```csharp
public bool|IResolvable AllowInstanceMigration { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, allows migration of the underlying instance where the client resides. Use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#allow_instance_migration AwsAuthBackendRole#allow_instance_migration}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

The auth type permitted for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#auth_type AwsAuthBackendRole#auth_type}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#backend AwsAuthBackendRole#backend}

---

##### `BoundAccountIds`<sup>Optional</sup> <a name="BoundAccountIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAccountIds"></a>

```csharp
public string[] BoundAccountIds { get; set; }
```

- *Type:* string[]

Only EC2 instances with this account ID in their identity document will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#bound_account_ids AwsAuthBackendRole#bound_account_ids}

---

##### `BoundAmiIds`<sup>Optional</sup> <a name="BoundAmiIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAmiIds"></a>

```csharp
public string[] BoundAmiIds { get; set; }
```

- *Type:* string[]

Only EC2 instances using this AMI ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#bound_ami_ids AwsAuthBackendRole#bound_ami_ids}

---

##### `BoundEc2InstanceIds`<sup>Optional</sup> <a name="BoundEc2InstanceIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundEc2InstanceIds"></a>

```csharp
public string[] BoundEc2InstanceIds { get; set; }
```

- *Type:* string[]

Only EC2 instances that match this instance ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#bound_ec2_instance_ids AwsAuthBackendRole#bound_ec2_instance_ids}

---

##### `BoundIamInstanceProfileArns`<sup>Optional</sup> <a name="BoundIamInstanceProfileArns" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamInstanceProfileArns"></a>

```csharp
public string[] BoundIamInstanceProfileArns { get; set; }
```

- *Type:* string[]

Only EC2 instances associated with an IAM instance profile ARN that matches this value will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#bound_iam_instance_profile_arns AwsAuthBackendRole#bound_iam_instance_profile_arns}

---

##### `BoundIamPrincipalArns`<sup>Optional</sup> <a name="BoundIamPrincipalArns" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamPrincipalArns"></a>

```csharp
public string[] BoundIamPrincipalArns { get; set; }
```

- *Type:* string[]

The IAM principal that must be authenticated using the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#bound_iam_principal_arns AwsAuthBackendRole#bound_iam_principal_arns}

---

##### `BoundIamRoleArns`<sup>Optional</sup> <a name="BoundIamRoleArns" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamRoleArns"></a>

```csharp
public string[] BoundIamRoleArns { get; set; }
```

- *Type:* string[]

Only EC2 instances that match this IAM role ARN will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#bound_iam_role_arns AwsAuthBackendRole#bound_iam_role_arns}

---

##### `BoundRegions`<sup>Optional</sup> <a name="BoundRegions" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundRegions"></a>

```csharp
public string[] BoundRegions { get; set; }
```

- *Type:* string[]

Only EC2 instances in this region will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#bound_regions AwsAuthBackendRole#bound_regions}

---

##### `BoundSubnetIds`<sup>Optional</sup> <a name="BoundSubnetIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundSubnetIds"></a>

```csharp
public string[] BoundSubnetIds { get; set; }
```

- *Type:* string[]

Only EC2 instances associated with this subnet ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#bound_subnet_ids AwsAuthBackendRole#bound_subnet_ids}

---

##### `BoundVpcIds`<sup>Optional</sup> <a name="BoundVpcIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundVpcIds"></a>

```csharp
public string[] BoundVpcIds { get; set; }
```

- *Type:* string[]

Only EC2 instances associated with this VPC ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#bound_vpc_ids AwsAuthBackendRole#bound_vpc_ids}

---

##### `DisallowReauthentication`<sup>Optional</sup> <a name="DisallowReauthentication" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.disallowReauthentication"></a>

```csharp
public bool|IResolvable DisallowReauthentication { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, only allows a single token to be granted per instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#disallow_reauthentication AwsAuthBackendRole#disallow_reauthentication}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#id AwsAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InferredAwsRegion`<sup>Optional</sup> <a name="InferredAwsRegion" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredAwsRegion"></a>

```csharp
public string InferredAwsRegion { get; set; }
```

- *Type:* string

The region to search for the inferred entities in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#inferred_aws_region AwsAuthBackendRole#inferred_aws_region}

---

##### `InferredEntityType`<sup>Optional</sup> <a name="InferredEntityType" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredEntityType"></a>

```csharp
public string InferredEntityType { get; set; }
```

- *Type:* string

The type of inferencing Vault should do.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#inferred_entity_type AwsAuthBackendRole#inferred_entity_type}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#namespace AwsAuthBackendRole#namespace}

---

##### `ResolveAwsUniqueIds`<sup>Optional</sup> <a name="ResolveAwsUniqueIds" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.resolveAwsUniqueIds"></a>

```csharp
public bool|IResolvable ResolveAwsUniqueIds { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether or not Vault should resolve the bound_iam_principal_arn to an AWS Unique ID.

When true, deleting a principal and recreating it with the same name won't automatically grant the new principal the same roles in Vault that the old principal had.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#resolve_aws_unique_ids AwsAuthBackendRole#resolve_aws_unique_ids}

---

##### `RoleTag`<sup>Optional</sup> <a name="RoleTag" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.roleTag"></a>

```csharp
public string RoleTag { get; set; }
```

- *Type:* string

The key of the tag on EC2 instance to use for role tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#role_tag AwsAuthBackendRole#role_tag}

---

##### `TokenBoundCidrs`<sup>Optional</sup> <a name="TokenBoundCidrs" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```csharp
public string[] TokenBoundCidrs { get; set; }
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#token_bound_cidrs AwsAuthBackendRole#token_bound_cidrs}

---

##### `TokenExplicitMaxTtl`<sup>Optional</sup> <a name="TokenExplicitMaxTtl" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```csharp
public double TokenExplicitMaxTtl { get; set; }
```

- *Type:* double

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#token_explicit_max_ttl AwsAuthBackendRole#token_explicit_max_ttl}

---

##### `TokenMaxTtl`<sup>Optional</sup> <a name="TokenMaxTtl" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```csharp
public double TokenMaxTtl { get; set; }
```

- *Type:* double

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#token_max_ttl AwsAuthBackendRole#token_max_ttl}

---

##### `TokenNoDefaultPolicy`<sup>Optional</sup> <a name="TokenNoDefaultPolicy" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```csharp
public bool|IResolvable TokenNoDefaultPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#token_no_default_policy AwsAuthBackendRole#token_no_default_policy}

---

##### `TokenNumUses`<sup>Optional</sup> <a name="TokenNumUses" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNumUses"></a>

```csharp
public double TokenNumUses { get; set; }
```

- *Type:* double

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#token_num_uses AwsAuthBackendRole#token_num_uses}

---

##### `TokenPeriod`<sup>Optional</sup> <a name="TokenPeriod" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPeriod"></a>

```csharp
public double TokenPeriod { get; set; }
```

- *Type:* double

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#token_period AwsAuthBackendRole#token_period}

---

##### `TokenPolicies`<sup>Optional</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; set; }
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#token_policies AwsAuthBackendRole#token_policies}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; set; }
```

- *Type:* double

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#token_ttl AwsAuthBackendRole#token_ttl}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktn/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_role#token_type AwsAuthBackendRole#token_type}

---



